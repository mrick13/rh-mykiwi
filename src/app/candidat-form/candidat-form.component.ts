import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.scss'],
})
export class CandidatFormComponent {

  @Input() candidat!: Candidat;

  email!: string;
  
  constructor(
    private candidatService: CandidatService,
    private router: Router
  ) {}
  
  onSubmitForm() {
    console.log('la');
    
    this.candidatService.addCandidat(this.candidat).then(() => {
      this.router.navigate([, this.candidat]);
      console.log(this.candidat);
      
    });
    console.log('lax2');
  }
}
