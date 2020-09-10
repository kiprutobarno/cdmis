import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://admin:admin123@localhost:3306/cdmis");

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default run;
