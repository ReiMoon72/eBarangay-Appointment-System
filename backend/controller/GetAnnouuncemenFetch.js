import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const FetchAnnouncement = async (req, res) => {
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .query(`SELECT * FROM AnnouncementTable`);

    const AnnouncementFetch = result.recordset;

    if (!AnnouncementFetch || !AnnouncementFetch.length === 0) {
      return res.status(404).json({ msg: "There are no Announcement Found" });
    }

    res
      .status(201)
      .json({ msg: "Announcement Has Been Fatch", data: AnnouncementFetch });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error Has Occured" });
  }
};
