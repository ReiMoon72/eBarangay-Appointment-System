import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const AdminFetch = async (req, res) => {
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .query(
        `SELECT Fullname, Services, Phonenumber, Dates, Time, Email, Purpose, Status, UserAppointID FROM UserAppoint`,
      );

    const AdminAppoint = result.recordset;

    if (AdminAppoint.length === 0) {
      return res.status(404).json({ msg: "There is no Appointment available" });
    }

    res.status(201).json({
      msg: "Appointment Has Been Fetch",
      data: AdminAppoint,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "No Data Found" });
  }
};
