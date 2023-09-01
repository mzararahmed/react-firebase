import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var config = {
    apiKey: "AIzaSyATaBfK4dmCtK6vySq7xvSvunQonoVos4Q",
    authDomain: "web-demo-ca2d3.firebaseapp.com",
    databaseURL: "https://web-demo-ca2d3.firebaseio.com",
    projectId: "web-demo-ca2d3",
    storageBucket: "web-demo-ca2d3.appspot.com",
    messagingSenderId: "442090786804"
  };
  class Firebase {
      constructor() {
          app.initializeApp(config);
          this.auth = app.auth();
          this.db = app.database();
      }
        // *** Authentication API *** 
        doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
        doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
        doSignOut = () => this.auth.signOut();
        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        doPasswordUpdate = password =>this.auth.currentUser.updatePassword(password);

        // *** User API ***

        user = uid => this.db.ref(`users/${uid}`);
        users = () => this.db.ref('users/');
  }
  export default Firebase;