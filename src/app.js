const express = require("express");
const dotenv = require("dotenv");
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

// CRUD DE AUTHORS

// create
app.post("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author created successfully",
   });
});

// get all
app.get("/api/authors", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Authors retreived successfully",
   });
});

// get by id
app.get("/api/authors/:id", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author retreived successfully",
   });
});

// update
app.put("/api/authors/:id", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author updated successfully",
   });
});

// delete
app.delete("/api/authors/:id", async (req, res) => {
   res.status(200).json({
      success: true,
      message: "Author deleted successfully",
   });
});

// CRUD DE BOOKS

// server
app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}`);
});
