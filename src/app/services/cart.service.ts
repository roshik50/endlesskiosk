import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { firestore } from 'firebase/app';

@Injectable()
export class CartService {

  constructor(private firebase: AngularFireDatabase) {

  }

  // {

  //   "user": {
  //         "1": {
  //                 "name": "Roshik",
  //                 "email": "roshik50@gmail.com",
  //                 "age": 99,
  //                 "location": "SF",
  //                 "age_location": "99_SF"
  //          },
  //          "2": {
  //                 "name": "Reshin",
  //                 "email": "reshin50@gmail.com",
  //                 "age": 99,
  //                 "location": "SF",
  //                 "age_location": "99_SF"
  //          }
  //       }



  // }
  inside() {
    //define root reference
    const rootRef = this.firebase.database.ref();

    // Select a user by UID
    const oneRef = rootRef.child('users').child('1');

    // Find a user by email address
    const twoRef = rootRef.child('users').orderByChild('email').equalTo('roshik50@gmail.com');

    //Limit to 10 users
    const threeRef = rootRef.child('users').limitToFirst(10);

    //get all users names that starts with 'D' 
    const fourRef = rootRef.child('users').orderByChild('name').startAt('D').endAt('D\uf8ff');

    //get all users whos age are less than 50
    const fiveRef = rootRef.child('users').orderByChild('age').endAt(49);

    //get all users whos age are greater than 50
    const sixRef = rootRef.child('users').orderByChild('age').startAt(51);

    //get all users whos age are between 20 and 100
    const sevenRef = rootRef.child('users').orderByChild('age').startAt(20).endAt(100);
    // get all users whos age is 50 and whos location SF
    const nineRef = rootRef.child('users').orderByChild('age_location').equalTo('99_SF');
  }


  // {

  //     "user":  {
  //              "1": {
  //                     "name": "Roshik",
  //                     "bio": "roshik50@gmail.com",
  //                     "profileImage":"HEllo I am a"
  //              },
  //              "2": {
  //                     "name": "Reshin",
  //                     "bio": "reshin50@gmail.com",
  //                     "profileImage": "I work as"
  //              }
  //            }

  //     "events": {
  //             "fm": {
  //                    "name": "Roshik",
  //                    "bio": "roshik50@gmail.com",
  //                    "profileImage":"HEllo I am a"
  //             }     
  //           }

  //     "eventAttendees": {
  //             "fm": {
  //                    "1": "Roshik",
  //                    "2": "Reshin"
  //             }     
  //           }
  // }

  joininfirebase() {
    const eventKey = "fm";
    const rootRef = this.firebase.database.ref();
    const attendeeRef = rootRef.child('eventAttendees');
    const usersRef = rootRef.child('users');

    function getUsersAtEvents(key, cb) {
      attendeeRef.child(key).on('child_added', snap => {
        let userRef = usersRef.child(snap.key);
        usersRef.once('value', cb)
      });
    }
    getUsersAtEvents(eventKey, snap => console.log(snap.val()));
  }


}
