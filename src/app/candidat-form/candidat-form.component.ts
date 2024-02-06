import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
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
  // Pays! : typeof PAYS[];

  constructor(
    private candidatService: CandidatService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.candidatForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      email: [null],
      phone: [null],
      city: [null],
      nationality: [null],
      statut: [null],
      moving: [null],
      isBorn: [
        null,
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      family: [null],
      experience: [null],
      technology: [null],
      note: [null],
    });

    // this.candidatPreview$ = this.candidatForm.valueChanges.pipe(
    //   map((formValue) => ({
    //     ...formValue,
    //   }))
    // );
  }

  onSubmitForm() {
    const id = `${this.candidatForm.value.name}${this.candidatForm.value.firstname}${this.candidatForm.value.isBorn}`.replaceAll(
      ' ',
      '-'
    )
    this.candidatService.addCandidat(this.candidatForm.value, id).then(() => {
      this.router.navigate(['candidat/', id]); //une fois crée => renvoie sur le détail du candidat crée
    });
  }
}
