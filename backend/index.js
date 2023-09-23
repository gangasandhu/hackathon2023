require("dotenv").config();
const express = require("express");
const cors = require("cors");
const database = require("./database");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const mongoose = require("mongoose");

const USER_SECRET = process.env.USER_SECRET;

mongoose.connect(
  `mongodb+srv://pulkitkakkar6:Pinternational1@cluster0.dypwgt2.mongodb.net/?retryWrites=true&w=majority`,
  { dbName: "CourseSwap" }
);

app.use(cors());
app.use(bodyParser.json());
app.post("/login", async (req, res, next) => {
  try {
    const result = req.body; //email, password

    const { username, password } = result;
    const user = await database.Users.findOne({ username, password });
    console.log(user);
    if (user) {
      console.log("User");

      const token = jwt.sign({ username, password }, USER_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json(token);
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    next(error);
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    const result = req.body;
    const { username, password, email, firstName, lastName } = result;

    let checkDb = await database.Users.findOne({ username });

    if (checkDb) {
      res.status(409).json({ message: "username already used" });
      return;
    }

    checkDb = await database.Users.findOne({ email });

    if (checkDb) {
      res.status(409).json({ message: "email already used" });
      return;
    }

    const user = new database.Users({
      username,
      password,
      email,
      firstName,
      lastName,
    });
    user.save();
    const token = jwt.sign({ username, password }, USER_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User Created", token });
  } catch (error) {
    next(error);
  }
});
app.put("/update-user", middleware.authenticateUser, async (req, res, next) => {
  try {
    const result = req.body;

    const currentUser = res.user;
    const { username, password, email, firstName, lastName } = result;

    // let checkDb = await database.Users.findOne({ username });
    // if (checkDb.) {
    //   res.status(409).json({ message: "username already used" });
    //   return;
    // }

    // checkDb = await database.Users.findOne({ email });

    // if (checkDb) {
    //   res.status(409).json({ message: "email already used" });
    //   return;
    // }

    let checkDb = await database.Users.find({ username: currentUser.username });

    if (!checkDb) {
      res.status(404).json({ message: "User does not exist" });
      return;
    }

    try {
        console.log("Helllll");
      const user = await database.Users.updateOne(
        { username: currentUser.username },
        {
          username,
          password,
          email,
          firstName,
          lastName,
        }
      );
      user.save();
      res.status(201).json({ message: "User Created" });
    } catch (e) {
      res.status(403).json({ message: "Conflict with other users" });
    }
  } catch (error) {
    next(error);
  }
});

app.get("/skill-search", async (req, res, next) => {
  try {
    const searchItem = req.headers.searchItem;

    const skills = await database.Skill.find({ name: searchItem });
    const searchArray = await database.Users.find({
      skills: { $in: skills.map((x) => x._id) },
    }).populate("skills");
    if (searchArray.length === 0) {
      res.status(404).json({ message: "No users with this skill found" });
      return;
    }
    res.status(200).json(searchArray.map((x) => ({ ...x._doc, password: "" })));
  } catch (e) {
    next(e);
  }
});

app.post(
  "/create-skill",
  middleware.authenticateUser,
  async (req, res, next) => {
    try {
      const {
        skillName,
        skillHeadLine,
        numberOfStudents,
        objectives,
        requirements,
        description,
        rating,
        courseImageLink,
        tags,
      } = req.body;

      const checkDb = await database.Skill.findOne({ skillName });
      if (checkDb) {
        console.log(checkDb);
        res.status(409).json({ message: "Couse name already used" });
        return;
      }
      const x = new database.Skill({
        skillName,
        skillHeadLine,
        numberOfStudents,
        objectives,
        requirements,
        description,
        rating,
        courseImageLink,
        tags,
      });
      x.save();
      res.status(200).json({ message: "Skill created" });
    } catch (error) {
      next(error);
    }
  }
);

app.get("/userData/:username", async (req, res, next) => {
  try {
    const username = req.params.username;
    const userDetails = await database.Users.findOne(username);
    if (userDetails) {
      console.log(userDetails);
      res.status(200).json({
        user: {
          username: userDetails.username,
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.email,
        },
      });
    } else {
      res.status(404).json({ user: undefined });
    }
  } catch (e) {
    next(e);
  }
});

app.put(
  "/connect/:username",
  middleware.authenticateUser,
  async (req, res, next) => {
    try {
      const { username } = req.params;
      const checkDb = await database.Users.findOne({ username });
      console.log(checkDb);
      if (!checkDb) {
        res.status(404).json({ message: "User not found" });
      } else {
        const currentUser = res.user;
        const currentUserFromDb = await database.Users.findOne({
          username: currentUser.username,
        });
        if (currentUserFromDb.favoriteUsers.con)
          checkDb.requests.push(currentUserFromDb._id);
        await checkDb.save();
        res.status(200).json({ message: "Request Sent" });
      }
    } catch (e) {
      next(e);
    }
  }
);

app.put(
  "/accept-request/:username",
  middleware.authenticateUser,
  async (req, res) => {
    const { username } = req.params;
    const checkDb = await database.Users.findOne({ username });
    if (!checkDb) {
      res.status(404).json({ message: "User not found" });
    } else {
      const currentUser = res.user;
      const currentUserFromDb = await database.Users.findOne({
        username: currentUser.username,
      });
      checkDb.connectedUsers.push(currentUserFromDb._id);
      currentUserFromDb.connectedUsers.push(checkDb._id);
      await checkDb.save();
      await currentUserFromDb.save();

      const z = [];
      for (let i = 0; i < currentUserFromDb.requests.length; i++) {
        if (currentUserFromDb.requests[i] !== checkDb._id) {
          continue;
        } else {
          z.push(currentUserFromDb.requests[i]);
        }
      }
      console.log(z);
      currentUserFromDb.requests = z;
      //   console.log(currentUserFromDb.requests);
      //   console.log(currentUserFromDb.requests);
      //   console.log(checkDb._id);

      await currentUserFromDb.save();
      res.status(200).json({ message: "Request accepted" });
    }
  }
);

app.put(
  "/mark-favorite/:username",
  middleware.authenticateUser,
  async (req, res, next) => {
    try {
      const { username } = req.params;
      console.log(username);
      const checkDb = await database.Users.findOne({ username });
      if (!checkDb) {
        res.status(404).json({ message: "User not found" });
      } else {
        const currentUserFromDb = await database.Users.findOne({
          username: res.user.username,
        });
        currentUserFromDb.favoriteUsers.push(checkDb._id);
        await currentUserFromDb.save();
        res.status(200).json({ message: "Marked Faviorite" });
      }
    } catch (e) {
      next(e);
    }
  }
);

app.use((err, req, res, next) => {
  console.log(err);

  res
    .status(500)
    .json({ message: "Something went wrong in the server or database" });
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
