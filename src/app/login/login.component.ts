import { Component, Input } from '@angular/core';
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
  
  @Input() message!: string;

  auth!: AuthService;
  email!: string;
  password!: string;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    // Initialiser le formulaire
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    // Créer les propriétés du formulaire
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }


  onLogin() {
    // Appeler le service et se connecter avec email et password
    this.authService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );
  }
}
