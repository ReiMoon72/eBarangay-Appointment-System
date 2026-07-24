import { transforter } from "../config/mail.js";

export const SendEmailToUser = async (req, res) => {
  const { nume, email, subject, missage } = req.body;

  try {
    if (!nume || !email || !subject || !missage) {
      return res.status(400).json({ success: false, msg: "Email Cannot Send" });
    }

    await transforter.sendMail({
      from: `"Contact System" <${process.env.Email_user}>`,
      to: email,
      subject: subject,
      html: missage,
    });

    res.status(201).json({
      success: true,
      msg: "Email Successfully Send",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Error Has Occured",
    });
  }
};
