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
  styleUrls: ['./detail-collab.component.scss'],
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
    // Vérifier le collaborateur
    if (candidatId) {
      // Appeler le service pour récuperer le collaborateur avec l'Id
      this.candidatService.getCandidatById(candidatId).then((candidat: any) => {
        this.candidat = candidat;
      });
    }
  }

  goSupprCollab(candidat: Candidat) {
    //Appeler le service pour supprimer le collaborateur
    this.candidatService.deleteCandidatById(candidat.id).then(() => {
      // Rediriger vers la liste des collaborateurs
      this.router.navigate(['']);
    });
  }

  goToEditCollab() {
    // Rediriger vers le formulaire pour édit un collaborateur
    this.router.navigate(['/edit/candidat/', this.candidat.id]);
  }

  removeCollab() {
    // Initialiser la db
    const db = getDatabase();
    // Passer le collaborateur en candidat
    this.candidat.isRecruited = false;

    set(ref(db, 'candidats/' + this.candidat.id), this.candidat).then(() =>
      // Rediriger vers la liste des candidats
      this.router.navigate(['/candidat'])
    );
  }
}
