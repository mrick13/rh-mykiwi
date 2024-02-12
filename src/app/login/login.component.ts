import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from '../firebase.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  auth!: AuthService;
  message!: string;
  email!: string;
  password!: string;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fbService: FirebaseService
  ) {}

  ngOnInit() {
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  onLogin() {
    const auth = getAuth(this.fbService.app);
    this.authService.login(this.email , this.password)
  }

  onLogout() {
    this.authService.logout();
    this.message = 'Vous êtes déconnecter';
  }
}
