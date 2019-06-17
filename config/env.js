const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/twitter-clone';
const port = process.env.PORT || 4000;

module.exports = {
    dbURI, port
}