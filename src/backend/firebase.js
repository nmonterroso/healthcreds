import firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DB_URL,
}

firebase.initializeApp(config)

class FirebaseBackend {
  constructor(firebase) {
    this.firebase = firebase
  }

  authenticate = (username, password) =>
    this.firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .then(({ user }) => user.name)
}

export default new FirebaseBackend(firebase)
