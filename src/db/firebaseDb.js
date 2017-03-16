import firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DB_URL,
}

firebase.initializeApp(config);

class FirebaseDb {
  constructor(firebase) {
    this.firebase = firebase;
  }
}

export default new FirebaseDb(firebase)
