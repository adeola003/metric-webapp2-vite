const express = require('express');

const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
