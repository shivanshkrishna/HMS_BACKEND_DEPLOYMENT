import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_HMS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(
        `Some error occured during the connection of database: ${err}`
      );
    });
};
