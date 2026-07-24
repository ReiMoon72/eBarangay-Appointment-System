import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const UserStatusChange = async (req, res) => {
  try {
    const { id } = req.params;
    const { Status } = req.body;

    const pool = await poolPromise;

    const UserChange = await pool
      .request()
      .input("UserAppointID", sql.Int, id)
      .input("Status", sql.VarChar, Status)
      .query(`UPDATE UserAppoint
        SET Status = @Status
        WHERE UserAppointID = @UserAppointID
        `);

    if (UserChange.rowsAffected[0] === 0) {
      return res.status(404).json({ msg: "Appointment Cannot Change" });
    }
    res.json(201).json({ msg: "Status Change Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Status Malfuction" });
  }
};
