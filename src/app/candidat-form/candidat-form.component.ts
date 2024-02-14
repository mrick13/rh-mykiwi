import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as M from 'materialize-css';
// import { PAYS } from '../models/candidat/pays';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.scss'],
})
export class CandidatFormComponent implements OnInit {

  @Input() candidat!: Candidat;

  candidatForm!: FormGroup;
  candidatPreview$!: Observable<Candidat>;

  constructor(
    private candidatService: CandidatService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // Initialiser le formulaire
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    // Créer les propriétés du formulaire
    this.candidatForm = this.formBuilder.group({
      name: [this.candidat.name, [Validators.required]],
      firstname: [this.candidat.firstname, [Validators.required]],
      email: [this.candidat.email],
      phone: [this.candidat.phone],
      city: [this.candidat.city],
      nationality: [this.candidat.nationality],
      statut: [this.candidat.statut],
      moving: [this.candidat.moving],
      isBorn: [
        this.candidat.isBorn,
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      family: [this.candidat.family],
      experience: [this.candidat.experience],
      technology: [this.candidat.technology],
      note: [this.candidat.note],
    });
  }

  onSubmitForm() {
    // Formatter l'id sous form de nom+prénom+date de naissance avec un tiret entre chaque valeur
    const id =
      `${this.candidatForm.value.name}${this.candidatForm.value.firstname}${this.candidatForm.value.isBorn}`.replaceAll(
        ' ',
        '-'
      );
    // Appeler le service pour crée le candidat d'après les valeurs du formulaire
    this.candidatService.addCandidat(this.candidatForm.value, id).then(() => {
      //une fois crée => renvoie sur le détail du candidat crée
      this.router.navigate(['candidat/', id]);
    });
  }
}
