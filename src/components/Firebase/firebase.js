import app from 'firebase/app'
const config = {
    apiKey: "AIzaSyBZxPZhTe44pqh_j_ylWL-Y06UehdObe4g",
    authDomain: "crapp-0117df.firebaseapp.com",
    databaseURL: "https://crapp-0117df.firebaseio.com",
    projectId: "crapp-0117df",
    storageBucket: "crapp-0117df.appspot.com",
    messagingSenderId: "520381899448",
    appId: "1:520381899448:web:fa78067c6343b841b98a4d"
  };
  class Firebase {
      constructor(){
          app.initializeApp(config);
          this.auth = app.auth();
        }
        doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
 

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)
}

  export default Firebase;