const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    connectedUsers : [{type:mongoose.Schema.Types.ObjectId, ref:"Users"}],
    favoriteUsers:[{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    requests:[{type:mongoose.Schema.Types.ObjectId, ref:"Users"}]
  });

  const skillSchema = new mongoose.Schema({
    skillName: { type: String, required: true, unique: true },
    skillHeadLine: { type: String },
    numberOfStudents: { type: Number, default: 0 },
    objectives: [String],
    requirements: [String],
    description: String,
    rating: { type: Number, default: 0.0 },
    courseImageLink: { type: String, required: true },
    tags: [String],
  });

const Users = mongoose.model("Users",userSchema);
const Skill = mongoose.model("Skill",skillSchema);

module.exports = {Users,Skill};