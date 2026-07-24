import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const getAllOfAppointByUser = async (req, res) => {
  const UserID = req.user.UserID;
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("UserID", sql.Int, UserID)
      .query(
        `SELECT Fullname, Dates, Time, Services, Status FROM UserAppoint WHERE UserID = @UserID`,
      );

    const AllAppoint = result.recordset;

    if (AllAppoint.length === 0) {
      return res.status(404).json({ msg: "There are no Appointment Avaible" });
    }

    res.status(200).json({
      msg: "Appointmet Has Been Fetch",
      data: AllAppoint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Order Cannot be Found" });
  }
};
