import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as M from 'materialize-css';
import { DatePickerOption } from '../shared/datePickerOption';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.scss'],
})
export class CandidatFormComponent implements OnInit {
  @Input() candidat!: Candidat;

  constructor(
    private candidatService: CandidatService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmitForm(form: NgForm) {
    console.log(this.candidat.isBorn);
    this.candidat.id = `${this.candidat.name}${this.candidat.firstname}${this.candidat.isBorn}`;

    this.candidatService.addCandidat(this.candidat).then(() => {
      this.router.navigate(['candidat/', this.candidat.id]); //une fois crée => renvoie sur le détail du candidat crée
    });
  }
}

// let formattedId;

// if (+this.candidat.id >= 1 && +this.candidat.id <= 9) {
//   formattedId = `0${this.candidat.id}`;
// } else {
//   formattedId = this.candidat.id.toString();
// }

// const options = new DatePickerOption();
// var elems = document.querySelectorAll('.datepicker');
// var instances = M.Datepicker.init(elems, options.options);
// const isBorn = document.getElementById('isBorn');
// if (isBorn != null) {
//   isBorn.addEventListener('change', (event) => {
//     console.log(event);
//   });
// }
