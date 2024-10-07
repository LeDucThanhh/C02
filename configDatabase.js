import mysql from "mysql2/promise";

async function connectToDb() {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "@ThanHLee2405#",
      database: "blog_database",
    });
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

export default connectToDb;
