import express from "express";
import run from "./Utils/db";

run();

const app = express();

app.listen(8000, () => {
  console.log("Server running........");
});
