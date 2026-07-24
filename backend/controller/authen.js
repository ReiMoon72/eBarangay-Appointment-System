import sql from "mssql";
import { poolPromise } from "../model/Database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const logInuser = async (req, res) => {
  const { emailAdress, passwordEmail } = req.body;

  try {
    const pool = await poolPromise;
    const request = pool.request();

    const SECRET = process.env.JWT_SECRET;

    const result = await request
      .input("Email", sql.VarChar, emailAdress)
      .query(`SELECT * FROM UserStoring WHERE Email = @Email`);

    const user = result.recordset[0];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify password
    const PassWordMatch = await bcrypt.compare(
      passwordEmail,
      user.HashPassword,
    );

    if (!PassWordMatch) {
      return res.status(401).json({ msg: "Invalid Password" });
    }

    //CREATE TOKEN FIRST
    const token = jwt.sign(
      {
        UserID: user.UserID,
        Email: user.Email,
        FullName: user.FullName,
        Roles: user.Roles,
      },
      SECRET,
      { expiresIn: "24h" },
    );

    // SEND RESPONSE WITH TOKEN
    res.json({
      message: "Login successful",
      token: token,
      user: {
        id: user.UserID,
        name: user.FullName,
        email: user.Email,
        role: user.Roles,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
};
