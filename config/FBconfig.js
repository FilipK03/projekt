var admin = require("firebase-admin");

var serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://store-fd418-default-rtdb.europe-west1.firebasedatabase.app"
});


const auth = admin.auth()
const db = admin.database()


module.exports = {auth, db}