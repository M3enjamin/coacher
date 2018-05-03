import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

interface User {
  uid: string,
  displayName?: string,
  email?: string,
  photoURL?: string
}

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private _firebaseAuth: AngularFireAuth, private _firestore: AngularFirestore, private _router: Router) {
    this.user = _firebaseAuth.authState.switchMap(user => {
      if (user) {
        return this._firestore.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this._firebaseAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this._firebaseAuth.auth.signOut().then(res => this._router.navigate(['/']));
  }
}
