import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const UserReschedule = async (req, res) => {
  const UserID = req.user.UserID;

  try {
    const { ReschedDate, selectedTime } = req.body;

    const pool = await poolPromise;

    const appintmentsss = await pool
      .request()
      .input("UserID", sql.Int, UserID)
      .query(`SELECT UserAppointID FROM UserAppoint WHERE UserID = @UserID`);

    if (appintmentsss.recordset.length === 0) {
      return res.status(404).json({ msg: "No Appointment Has Found" });
    }

    const Hotdog = appintmentsss.recordset[0].UserAppointID;

    const success = await pool
      .request()
      .input("UserAppointID", sql.Int, Hotdog)
      .input("ReschedDate", sql.VarChar, ReschedDate)
      .input("selectedTime", sql.VarChar, selectedTime)
      .query(`UPDATE UserAppoint 
      SET 
        Dates = @ReschedDate,
        Time = @selectedTime
        WHERE UserAppointID = @UserAppointID`);

    res.status(201).json({ msg: "Appointment Has Been Reschedule" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Cannot Enter the Reschedule" });
  }
};
