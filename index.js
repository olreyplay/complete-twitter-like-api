// Import required modules and files
const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application instance
const router = require("./routes/postsRoutes"); // Import the router module for posts
const PORT = process.env.PORT || 3000; // Define the port for the server

app.use(express.json()); // Use the express.json() middleware for parsing JSON requests

app.use("/api", router); // Use the router for handling routes under the "/api" path

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error to the console
  res.status(500).json({ error: "Internal Server Error" }); // Send a 500 Internal Server Error response
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message indicating the server is running
});
