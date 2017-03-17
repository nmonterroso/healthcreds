import firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DB_URL,
}

firebase.initializeApp(config)

class FirebaseBackend {
  constructor(firebase, initializePromise) {
    this.firebase = firebase
    this.initializePromise = initializePromise
  }

  authenticate = (username, password) =>
    this.firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .then(user => user.displayName)

  restoreSession = () =>
    this.initializePromise
      .then((user) => {
        const loggedIn = user !== null
        const name = loggedIn ? user.displayName : null
        return [loggedIn, name]
      })
}

const initializePromise = new Promise((resolve) => {
  let authInitialized = false

  firebase.auth().onAuthStateChanged((user) => {
    if (authInitialized) {
      return
    }

    authInitialized = true
    resolve(user)
  })
})

export default new FirebaseBackend(firebase, initializePromise)
