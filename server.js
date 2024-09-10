const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const mongoose = require('./database');
const cors = require('cors');
// Connect to MongoDB (we should uncomment and configure this part if needed)
// mongoose.connect(process.env.MONGODB_URI, {});

// Initialize express app
const app = express();
app.use(cors());
// Port configuration
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);  // Error handler middleware

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// const express = require('express');
// const errorHandler = require('./middleware/errorHandler');
// const  dotenv = require('dotenv').config();
// // const mongoose = require('../database');
// // const { connect } = require('mongoose');
// const mongoose = require('mongoose');

// //  connectDB();

// const app = express();
// //  mongoose.connect(process.env.MONGODB_URI, {});

// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use("/api/contacts", require("./routes/contactRoutes"));
// app.use(errorHandler);//This is the error handler middleware 


// app.listen(port, () =>{
//     console.log(`Server running on port ${port}`);
// });