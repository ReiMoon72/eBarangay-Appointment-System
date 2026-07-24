import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const userGetBook = async (req, res) => {
  const UserID = req.user.UserID;
  
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("UserID", sql.Int, UserID)
      .query(
        `SELECT TOP 1 UserAppointID, Dates, Time, Services, Status FROM UserAppoint WHERE UserID = @UserID ORDER BY Dates DESC`,
      );

    const UserAppoints = result.recordset;

    if (!UserAppoints || UserAppoints.length === 0) {
      return res.status(404).json({ msg: "Appointment Not Found" });
    }

    res.status(201).json({
      msg: "Appointmet Has Been Fetch",
      data: UserAppoints,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Order Cannot be Found" });
  }
};
