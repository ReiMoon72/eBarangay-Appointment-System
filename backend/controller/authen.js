import sql from "../model/Database.js";

export const logInuser = async (req, res) => {
  const { emailAdress, passwordEmail } = req.body;

  try {
    const request = new sql.Request();

    const result = await request
      .input("Email", sql.VarChar, emailAdress)
      .input("Password", sql.VarChar, passwordEmail)
      .query(`SELECt * FROM eSystemUser 
            WHERE Email = @Email AND Password = @Password`);

    const user = result.recordset[0];
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      user: {
        id: user.UserID,
        name: user.Name,
        email: user.Email,
        role: user.roles,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
