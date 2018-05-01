import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  emailSignup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
   
  }

  emailSignin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    
  }
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
   
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  
  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }

  currentUser() {
    var user = firebase.auth().currentUser;
    var currentUser = null;

    if (user != null) {
      currentUser = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid,
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
      }
    }
    return currentUser;


  }


  logout() {
    return this.afAuth.auth.signOut();
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
  
  updateUserProfile(name:string,phone:string) {
    var user = firebase.auth().currentUser;

    return user.updateProfile({
      displayName: name,
      photoURL: phone
    });

  }

  sendPasswordResetEmail(emailAddress) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(emailAddress);
  }

  // sendEmailVerification() {
  //   var user = firebase.auth().currentUser;

  //   user.sendEmailVerification().then(function () {
  //     // Email sent.
  //   }).catch(function (error) {
  //     // An error happened.
  //   });

  // }
 
  // deleteUser() {
  //   var user = firebase.auth().currentUser;

  //   user.delete().then(function () {
  //     // User deleted.
  //   }).catch(function (error) {
  //     // An error happened.
  //   });

  // }
}
