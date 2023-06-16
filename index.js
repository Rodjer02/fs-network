import express from "express";
import path from "path";
import mongoose from "mongoose";

const PORT = 8080;
const mongoUri =
  "mongodb+srv://GoldenRodjer:Azxcvbnm202@cluster0.54cz5w0.mongodb.net/newsApp?retryWrites=true&w=majority";

const app = express();

mongoose
  .connect(mongoUri)
  .then(() => console.log("DB has been connected..."))
  .catch((err) => console.log(err));

app.set("views", path.resolve("views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});
