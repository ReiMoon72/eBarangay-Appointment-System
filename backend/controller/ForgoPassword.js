import sql from "mssql";
import bcrypt from "bcrypt";
import { poolPromise } from "../model/Database.js";

export const NewPassword = async (req, res) => {
  try {
    const { EmailInput, NewPassword } = req.body;

    const pool = await poolPromise;

    const FindEmailUser = await pool
      .request()
      .input("EmailInput", sql.VarChar, EmailInput)
      .query(`SELECT Email FROM UserStoring WHERE Email = @EmailInput`);

    if (FindEmailUser.recordset.length === 0) {
      return res.status(404).json({
        msg: "Email Not Found",
      });
    }

    const NewPasswordHash = await bcrypt.hash(NewPassword, 14);

    const NewPasswordMade = await pool
      .request()
      .input("EmailInput", sql.VarChar, EmailInput)
      .input("NewPassword", sql.VarChar, NewPasswordHash)
      .query(`UPDATE UserStoring 
            SET HashPassword = @NewPassword 
            WHERE Email = @EmailInput`);

    res.status(201).json({ msg: "New Password Has Been Input" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Their was a error", error });
  }
};
