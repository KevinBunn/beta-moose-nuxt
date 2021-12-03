// Import the dependency.
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;
let clientPromise;

// In production mode, it's best to not use a global variable.
clientPromise = mongoose.connect(uri)

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
module.exports = clientPromise;
