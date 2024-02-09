import { Component, OnInit, Pipe } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { CustomDatePipe } from '../shared/custom-date.pipe';
import { CustomPhonePipe } from '../shared/custom-phone.pipe';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  candidatList!: Candidat[];
  candidat!: Candidat;
  customDate: Pipe = CustomDatePipe;
  customPhone: Pipe = CustomPhonePipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatService
  ) {}

  ngOnInit() {
    const candidatId: string | null = this.route.snapshot.paramMap.get('id');
    if (candidatId) {
      this.candidatService.getCandidatById(candidatId).then((candidat: any) => {
        this.candidat = candidat;
        console.log(this.candidat);
        
      });
    }
  }

  goSupprCandidat(candidat: Candidat) {
    this.candidatService.deleteCandidatById(candidat.id).then(() => {
      this.router.navigate(['']);
    });
  }

  goToEditCandidat() {
    this.router.navigate(['/edit/candidat/' , this.candidat.id ])
  }

  addCollab() {
    const db = getDatabase();
    this.candidat.isRecruited = true;
    
    set(ref(db, 'candidats/' + this.candidat.id), this.candidat).then(
      () => this.router.navigate(['/collaborateurs'])
    );
  }
}
