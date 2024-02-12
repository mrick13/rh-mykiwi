import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl!: string;

  constructor(private fbService: FirebaseService , private router : Router) {}

  login(email: string, password: string) {
    const auth = getAuth(this.fbService.app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  logout() {}
}