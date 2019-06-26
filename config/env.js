const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/twitter-clone';
const port = process.env.PORT || 4000;
const secret = 'Coco Pops'; // Replace and add as env variable later

module.exports = {
    dbURI, port, secret
}