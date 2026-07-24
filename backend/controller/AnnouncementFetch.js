import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const FetchAnnouncements = async (req, res) => {
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .query(
        `SELECT TOP 1 AnnouncementID, AnnouncementTitle, AnnouncementMessage FROM AnnouncementTable ORDER BY AnnouncementID DESC`,
      );

    const Announcement = result.recordset;

    if (!Announcement || Announcement.length === 0) {
      return res.status(404).json({ msg: "No Announcement Found" });
    }

    res.status(200).json({
      msg: "Announcement Successfully Fetch",
      data: Announcement,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "There are a Problem", error });
  }
};
