import { Component, Input, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fbService: FirebaseService,
    private router: Router
  ) {}
  ngOnInit() {
    // Initialiser le formulaire
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    // Créer les propriétés du formulaire
    this.registrationForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  registrationOn() {
    const auth = getAuth(this.fbService.app);
    const email = this.registrationForm.get('email')?.value;
    const password = this.registrationForm.get('password')?.value;
    //création de nouveau utilisateur avec firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      // Produire un message d'erreur lors de la création du nouveau compte
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      // Rediriger vers le formulaire de connexion
    this.router.navigate(['/login']);
  }
}
