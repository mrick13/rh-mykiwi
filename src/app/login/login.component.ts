import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from '../firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fbService: FirebaseService,
    private formBuilder: FormBuilder,
    private router : Router,
  ) {}

  ngOnInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  setMessage() {
    if (!this.auth.isLoggedIn) {
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  onLogin() {
    this.authService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );
  }
}
