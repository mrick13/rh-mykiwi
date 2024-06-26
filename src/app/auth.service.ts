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
  message!: string;

  constructor(private fbService: FirebaseService, private router: Router) {}

  login(email: string, password: string) {
    const auth = getAuth(this.fbService.app);

    //Connection avec un utilisateurs existant

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isLoggedIn = true;
        this.router.navigate(['/homepage']);
      })
      // Produire une erreur si l'utilisateur se trompe de login
      .catch((error) => {
        this.message = "Identifiant ou email incorrect"
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  
  logout() {
    // Rediriger vers la page de connexion
    this.router.navigate(['/login'])
  }
}
