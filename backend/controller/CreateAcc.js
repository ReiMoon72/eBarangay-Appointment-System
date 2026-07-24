import bcrypt from "bcrypt";
import { poolPromise } from "../model/Database.js";
import sql from "mssql";
import { generateToken } from "../utils/jwt.js";

export const createUser = async (req, res) => {
  try {
    const { email, passwordEmail, PhoneNumber, Fullname } = req.body;

    if (!email || !passwordEmail || !PhoneNumber || !Fullname) {
      console.log("Missing fields");
      return res.status(400).json({ msg: "All fields are required" });
    }

    const pool = await poolPromise;
    console.log("Pool connected");

    // Check if user exists
    const CheckingUser = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(`SELECT * FROM UserStoring WHERE Email = @email`);

    console.log("User check completed");

    if (CheckingUser.recordset.length > 0) {
      console.log("User already exists");
      return res.status(400).json({ msg: "User Email is Already Existing" });
    }

    console.log("Starting password hash");

    // Hash password
    const hashpass = await bcrypt.genSalt(10);
    const HashPassword = await bcrypt.hash(passwordEmail, hashpass);

    // Insert user
    await pool
      .request()
      .input("Fullname", sql.VarChar, Fullname)
      .input("email", sql.VarChar, email)
      .input("PhoneNumber", sql.VarChar, String(PhoneNumber))
      .input("passwordEmail", sql.VarChar, HashPassword)
      .query(
        `INSERT INTO UserStoring (FullName, Email, PhoneNumber, HashPassword) VALUES (@Fullname, @email, @PhoneNumber, @passwordEmail)`,
      );

    // Get the newly inserted user
    const userResult = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(
        `SELECT UserID, FullName, Email FROM UserStoring WHERE Email = @email`,
      );

    const NewUser = userResult.recordset[0];

    if (!NewUser) {
      console.log("User not found after insert");
      return res.status(500).json({ error: "User not found after insert" });
    }

    const token = generateToken(NewUser);

    res.status(201).json({
      message: "Account created successfully",
      token,
      user: {
        id: NewUser.UserID,
        email: NewUser.Email,
        fullname: NewUser.FullName,
        passowrd: NewUser.HashPassword,
      },
    });
  } catch (error) {
    console.error("ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
};
