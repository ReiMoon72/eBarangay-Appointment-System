import sql from "mssql";
import { poolPromise } from "../model/Database.js";

export const PostAnnouncementAdmin = async (req, res) => {
  try {
    const { AnnouncementTItle, AnnouncementMessage } = req.body;

    if (!AnnouncementTItle || !AnnouncementMessage) {
      console.log("There are a missing Field");
      return res.status(404).json({ msg: "Cannot Post The Announcement" });
    }

    const pool = await poolPromise;

    //Inserting The Announcements
    const postAnnounce = await pool
      .request()
      .input("AnnouncementTItle", sql.VarChar, AnnouncementTItle)
      .input("AnnouncementMessage", sql.VarChar, AnnouncementMessage)
      .query`INSERT INTO AnnouncementTable( AnnouncementTitle, AnnouncementMessage)
    VALUES(@AnnouncementTItle, @AnnouncementMessage)`;

    res.status(201).json({ msg: "Announcement has been post" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Cannot Post The Announcement" });
  }
};
