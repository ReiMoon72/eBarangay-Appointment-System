import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,

  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    encrypt: false,
  },
};

export const connectedDB = async () => {
  try {
    await sql.connect(config);
    console.log("SQL Server Connected!!");
  } catch (error) {
    console.error(error);
  }
};

export default sql;
