import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.scss'],
})
export class CandidatFormComponent {

  @Input() candidat!: Candidat ;

  constructor(
    private candidatService: CandidatService,
    private router: Router
  ) {}
  onSubmitForm(form : NgForm) {
    
    this.candidatService.addCandidat(this.candidat).then(() => {
      this.router.navigate([, this.candidat]);
      
    });
    console.log('lax2');
  }
}
