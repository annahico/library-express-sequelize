const db = require('./database/db');

const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db");
const apiRoutes = require("./routes");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/api/healthy", (req, res) => {
   res.status(200).json({
      success: true,
      message: "My APP server is healthy",
   });
});

//CRUD DE AUTHORS

//create

app.post("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author created successfully",
      data: Autors,
   });
});

//get all

app.get("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author retreived successfully",
   });
});

// get by id

app.get("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author retreived successfully",
   });
});

//update

app.put("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author updated successfully",
   });
});

//detele

app.delete("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author deleted successfully",
   });
});

//CRUD DE BOOKS

//server

app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}`);
});

// Register API routes
app.use("/api", apiRoutes);

sequelize
   .authenticate()
   .then(() => {
      console.log("🛢️  Database authenticated");

      // start the server
      app.listen(PORT, () => {
         console.log(`🚀 Server listening on port: ${PORT}`);
      });
   })
   .catch(() => {
      console.error("Error authenticating database");
   });