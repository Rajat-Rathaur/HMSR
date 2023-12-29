const mongoose = require('mongoose');

// Replace 'your_mongodb_connection_string' with your actual MongoDB connection string
const connection_string = '';

// Connect to MongoDB
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
    // Connection successful, access the database
    const database = db.db;

    // Get the list of collections
    const collections = await database.listCollections().toArray();

    // Print the collections
    console.log("Collections:");
    collections.forEach(collection => {
        console.log(collection.name);
    });

    // Close the connection
    mongoose.connection.close();
});
