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
    trustServerCertificate: false,
    encrypt: false,
  },
};

const pool = new sql.ConnectionPool(config);

export const poolPromise = sql
  .connect(config)
  .then((pool) => {
    return pool;
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    throw err;
  });

export const connectedDB = async () => {
  try {
    await sql.connect(config);
    console.log("SQL Server Connected!!");
  } catch (error) {
    console.error(error);
  }
};

export default sql;
