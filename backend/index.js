import express from 'express'
const app = express()
import dotenv from 'dotenv'
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
// connect to mongoDB
mongoose.connect(URI)
    .then(() => console.log('Connected To MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));


// defining routes
// Endpoint to get books
app.get("/book", async (req, res) => {
  try {
      const books = await Book.find();
      res.json(books);
  } catch (error) {
      res.status(500).send("Error fetching books");
  }
});
// Load data from JSON file and save to database
app.get("/load-mobiles", async (req, res) => {
  try {
      const data = JSON.parse(fs.readFileSync("mobiles.json", "utf-8"));
      await Book.insertMany(data);
      res.send("Mobile phones data successfully loaded!");
  } catch (error) {
      res.status(500).send("Failed to load data");
  }
});
app.use("/user", userRoute);