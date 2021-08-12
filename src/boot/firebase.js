import { boot } from 'quasar/wrappers'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { ENV } from '../../env'
// import 'firebase/storage'

const firebaseConfig = {
  apiKey: ENV.apiKey,
  authDomain: ENV.authDomain,
  databaseURL: ENV.databaseURL,
  projectId: ENV.projectId,
  storageBucket: ENV.storageBucket,
  messagingSenderId: ENV.messagingSenderId,
  appId: ENV.appId,
  measurementId: ENV.measurementId
}

firebase.initializeApp(firebaseConfig)

firebase.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      console.log(err.code)
    } else if (err.code === 'unimplemented') {
      console.log(err.code)
    }
  })

const db = firebase.firestore()

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app, store }) => {
  return new Promise((resolve, reject) => {
    app.config.globalProperties.$firebase = firebase
    app.config.globalProperties.$db = db

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.commit('user/setUser', user)
      } else {
        store.commit('user/setUser', null)
      }

      resolve()
    })
  })
})
