import jwt from "jsonwebtoken";

const Secret = process.env.JWT_SECRET;

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.UserID,
      email: user.Email,
    },
    Secret,
    { expiresIn: "1d" },
  );
};
