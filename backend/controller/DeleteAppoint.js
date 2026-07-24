import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const DeleteAppointment = async (req, res) => {
  const UserID = req.user.UserID;
  try {
    const UserAppointID = req.params.UserAppointID;
    const pool = await poolPromise;

    //Getting the Appointment
    const gettingDeleting = await pool
      .request()
      .input("userID", sql.Int, UserID)
      .query(`SELECT UserAppointID FROM UserAppoint WHERE UserID = @UserID`);

    if (gettingDeleting.recordset.length === 0) {
      return res.status(201).json({ msg: "No Appointment Has FOUND" });
    }

    const Hotdog = gettingDeleting.recordset[0].UserAppointID;

    //Deleting From Database
    const successs = await pool
      .request()
      .input("UserAppointID", sql.Int, UserAppointID)
      .query(`DELETE FROM UserAppoint WHERE UserAppointID = @UserAppointID`);

    res.status(201).json({ msg: "The Appointment Has been Deleted" });

    await pool;
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Appoiintment Has Not FOUND" });
  }
};
