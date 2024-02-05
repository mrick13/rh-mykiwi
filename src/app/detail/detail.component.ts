import { Component, OnInit, Pipe } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { CustomDatePipe } from '../custom-date.pipe';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  candidatList!: Candidat[];
  candidat!: Candidat;
  customDate : Pipe = CustomDatePipe

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatService
  ) {}
  ngOnInit() {
    const candidatId: string | null = this.route.snapshot.paramMap.get('id');
    console.log(candidatId);
    if (candidatId) {
      this.candidatService.getCandidatById(candidatId).then((candidat: any) => {
        this.candidat = candidat;
      });
    }
  }

  goSupprCandidat(candidat : Candidat) {
    this.candidatService.deleteCandidatById(candidat.id).then(()  =>{
      this.router.navigate([''])
    });
  }
}
