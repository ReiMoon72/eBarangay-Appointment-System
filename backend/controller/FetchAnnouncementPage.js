import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const AnnouncementFetchUserSide = async (req, res) => {
  const AnnouncementID = req.params.AnnouncementID;

  try {
    const pool = await poolPromise;

    const resultFetch = await pool
      .request()
      .query(
        `SELECT TOP 1 AnnouncementID, AnnouncementTitle, AnnouncementMessage  FROM AnnouncementTable ORDER BY AnnouncementID DESC `,
      );

    const AnnouncemenFetchResult = resultFetch.recordset;

    if (!AnnouncemenFetchResult || AnnouncemenFetchResult.length === 0) {
      return res.status(404).json({ msg: "Announcement Cannot Fetch" });
    }

    res.status(200).json({
      msg: "Announcement Fetch Successfully",
      data: AnnouncemenFetchResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Announcement Cannot Fetch" });
  }
};
