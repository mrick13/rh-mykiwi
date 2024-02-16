import { Component, OnInit, Pipe } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { CustomDatePipe } from '../pipe/custom-date.pipe';
import { CustomPhonePipe } from '../pipe/custom-phone.pipe';
import { getDatabase, ref, set } from 'firebase/database';
import { DetailCardComponent } from '../detail-card/detail-card.component';

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
  ) // private detailCard : DetailCardComponent
  {}

  ngOnInit() {
    const candidatId: string | null = this.route.snapshot.paramMap.get('id');
    // Vérifier le candidat
    if (candidatId) {
      // Appeler le service pour récuperer le candidat avec l'Id
      this.candidatService.getCandidatById(candidatId).then((candidat: any) => {
        this.candidat = candidat;
      });
    }
  }

  goSupprCandidat(candidat: Candidat) {
    //Appeler le service pour supprimer le candidat
    this.candidatService.deleteCandidatById(candidat.id).then(() => {
      // Rediriger vers la liste des candidats
      this.router.navigate(['/candidat']);
    });
  }

  goToEditCandidat() {
    // Rediriger vers le formulaire pour édit un candidat
    this.router.navigate(['/edit/candidat/', this.candidat.id]);
  }

  addCollab() {
    // Initialiser la db
    const db = getDatabase();
    // Passer le candidat en collaborateur
    this.candidat.isRecruited = true;
    this.candidat.dateChangement = new Date().toDateString();

    // this.detailCard.isDateCollab()
    set(ref(db, 'candidats/' + this.candidat.id), this.candidat).then(() =>
      // Rediriger vers la liste des collaborateurs
      this.router.navigate(['/collaborateurs'])
    );
  }
}
