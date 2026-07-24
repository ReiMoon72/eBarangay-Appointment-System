import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectedDB } from "./model/Database.js";
import authRoutes from "./routes/authentication.js";
import createUser from "./routes/CreateAcc.js";
import AppointmentBook from "./routes/AppintSched.js";
import AppointmentGetting from "./routes/AppointmentGet.js";
import GetAllUserAppint from "./routes/GetAllAppoint.js";
import RescheduleAppoint from "./routes/Resched.js";
import DeletingUserAppoint from "./routes/DeleteAppointment.js";
import GettingAdminFetch from "./routes/GetAdminAppoint.js";
import UserchangeStatuss from "./routes/UserStatusChanging.js";
import PostingtheAnnouncement from "./routes/PostingAnnouncement.js";
import GetAnnouncementFetch from "./routes/AnnouncementFetch.js";
import ForgetPassword from "./routes/ForgetPassword.js";
import FetchAnnouncementUSer from "./routes/AnnouncementFetchRoute.js";
import AnnouncementUSerSIDEFECH from "./routes/AnnouncementFetchResultRoute.js";
import UserEmailSend from './routes/SendEmailRoute.js'

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//For the login
app.use("/api/auth", authRoutes);

//Creating a User/Admin
app.use("/api", createUser);

//For the submit of the book
app.use("/api", AppointmentBook);

//Fetching the User Appointment Latest order
app.use("/api", AppointmentGetting);

//Getting all the user Appointment
app.use("/api", GetAllUserAppint);

//For the Reschedule
app.use("/api", RescheduleAppoint);

//For Deleting User Appoint
app.use("/api", DeletingUserAppoint);

//For Admin Fetch
app.use("/api", GettingAdminFetch);

//For changing the user status
app.use("/api", UserchangeStatuss);

//Admin Posting The Announcement
app.use("/api", PostingtheAnnouncement);

//Get The Announcement in Admin Side
app.use("/api", GetAnnouncementFetch);

//Forget Password
app.use("/api", ForgetPassword);

//Get the Announcement UserSide
app.use("/api/announcement", FetchAnnouncementUSer);

//Get the Announcement in the userside NOT in userdashboard
app.use("/api", AnnouncementUSerSIDEFECH);

//Sending a Email
app.use('/api', UserEmailSend)

connectedDB();

app.listen(PORT, () => {
  console.log(`The Server is Running at Port ${PORT}`);
});
