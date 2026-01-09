const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
// This code initializes the Express application and starts the server on the specified port.
// It imports the app from app.js and listens on the defined PORT, logging a message when the server is running.
// This is the entry point for the application, where the server is started and ready to handle requests.