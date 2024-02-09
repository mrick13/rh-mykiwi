import { Component, OnInit, Pipe } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CustomPhonePipe } from '../shared/custom-phone.pipe';
import { CustomDatePipe } from '../shared/custom-date.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-detail-collab',
  templateUrl: './detail-collab.component.html',
  styleUrls: ['./detail-collab.component.scss']
})
export class DetailCollabComponent implements OnInit {


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

  removeCollab() {
    const db = getDatabase();
    this.candidat.isRecruited = false;
    
    set(ref(db, 'candidats/' + this.candidat.id), this.candidat).then(
      () => this.router.navigate([''])
    );
  }
}
