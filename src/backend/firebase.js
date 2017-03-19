import firebase from 'firebase'
import UserData from '../models/UserData'

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
      .then(user => new UserData(user.displayName, user.photoURL))

  restoreSession = () =>
    this.initializePromise
      .then((user) => {
        if (user === null) {
          return null
        }

        return new UserData(user.displayName, user.photoURL)
      })

  logout = () =>
    this.firebase.auth()
      .signOut()

  updateUserData = userData =>
    this.firebase.auth().currentUser
      .updateProfile({
        displayName: userData.getName(),
        photoUrl: userData.getProfileImage(),
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
