import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const userAppoint = async (req, res) => {
  try {

    if (!req.user.UserID) {
      return res.status(401).json({
        error: "User authenticated but UserID missing",
      });
    }

    const {
      UserID,
      SelectedService,
      DateSelected,
      TimeSelected,
      fullName,
      PhoneNumber,
      emailaddress,
      barangayAdd,
      purpose,
    } = req.body;

    const pool = await poolPromise;

    await pool
      .request()
      .input("UserID", sql.Int, req.user.UserID)
      .input("fullName", sql.VarChar, fullName)
      .input("SelectedService", sql.VarChar, SelectedService)
      .input("DateSelected", sql.VarChar, DateSelected)
      .input("TimeSelected", sql.VarChar, TimeSelected)
      .input("PhoneNumber", sql.VarChar, PhoneNumber)
      .input("emailaddress", sql.VarChar, emailaddress)
      .input("barangayAdd", sql.VarChar, barangayAdd)
      .input("purpose", sql.VarChar, purpose)
      .query(`INSERT INTO UserAppoint (UserID, Fullname, Services, Dates, Time, Phonenumber, Email, BarangayAdd, Purpose)
        VALUES (@UserID, @fullName, @SelectedService, @DateSelected, @TimeSelected, @PhoneNumber, @emailaddress, @barangayAdd, @purpose)`);

    res.status(200).json({
      message: "The Appointment has been put",
    });
  } catch (error) {
    console.error("ERROR:", error.message);
    res.status(500).json({ error: "QUACK, The Appointment doesn't book" });
  }
};
