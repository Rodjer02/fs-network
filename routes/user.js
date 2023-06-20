import { Router } from "express";
import User from "../models/User.js";

const router = Router();

//password login
//=== with database
//if(true) => User
//if(false) => no user with such email or password

router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    const thisUser = await User.findOne({ email });

    if (thisUser.password === password) {
      res.status(200).json({
        _id: thisUser._id,
        email: thisUser.email,
        avatar: thisUser.avatar,
      });
      return;
    }
    res.status(400).json({ result: "No user with such email or password" });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
});

export default router;
