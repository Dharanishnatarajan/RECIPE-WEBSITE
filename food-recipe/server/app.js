import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt"

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/* CORS */
app.use(cors({origin: true, credentials: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 20,
    }
})

/* ROUTES */

const User = mongoose.model("User",UserSchema);

const register = async (req, res) => {
    
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      res.status(500).json({ msg: "Username already exists" });
    } else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newUser = new User({ username, password: passwordHash });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
      else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) res.status(400).json({ msg: "Invalid credentials. " });
        else {
          res.status(200).json({ user });
        }
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

app.post("/register", register)
app.post("/login", login)


/* CONNECTION */
const PORT = 6001;
mongoose.connect("mongodb://127.0.0.1:27017/food").then(() => {
    app.listen(6001, () => console.log(`⚡Server is running at http://localhost:${PORT}`));
}).catch((error) => console.log(error + " did not connect"));
