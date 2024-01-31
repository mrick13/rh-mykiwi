import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as M from 'materialize-css';


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
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  }


  onSubmitForm(form: NgForm) {
    this.candidatService.addCandidat(this.candidat).then(() => {
      this.router.navigate(['/']);
    });
  }
}
