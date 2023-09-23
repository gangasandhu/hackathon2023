const jwt = require("jsonwebtoken");
const database = require('./database')
require("dotenv").config();
async function authenticateUser(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const user = jwt.verify(token, process.env.USER_SECRET);
      console.log(user);
      const databaseUser = await database.Users.findOne({
        username: user.username,
        password: user.password,
      });
      console.log(user);
      if (user && databaseUser) {
        res.user = user;
        next();
      } else res.sendStatus(403);
    } catch (e) {
      res.sendStatus(500);
    }
  } else res.sendStatus(401);
}

module.exports={authenticateUser}