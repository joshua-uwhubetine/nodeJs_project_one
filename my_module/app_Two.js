//
/* 
import express from "express";

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to our Express.js server built by Josh the Dev!");
});

app.get("/about", (req, res) => {
    res.json({
    message: "About Us",
    description: "This is a sample page built using Express.js app",});
});

app.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact Us", email: "contact@example.com" });
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 */

// Working with Express.js (Using Modularity)
/* 
import express from "express";
import aboutRoutes from '../routes/about.js';

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to our Express.js server built by Josh the Dev!");
});

app.use('/routes', aboutRoutes);

app.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact Us", email: "contact@example.com" });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 */

// EJS - Templating Engine

import express from "express";
import aboutRoutes from "../routes/about.js";


const app = express();
const PORT = 3000;
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to our Express.js server built by Josh the Dev!");
});

app.use("/routes", aboutRoutes);

// rendering ejs file  ,  specified our own custom route "/user""
app.get("/user", (req, res) => {
  res.render("mySample", { username: "McDonalds", email: "Big-Mack@example.com" });
});

app.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact Us", email: "contact@example.com" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
