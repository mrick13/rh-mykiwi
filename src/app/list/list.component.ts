import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: {
    class : "full-size"
  }
})
export class ListComponent implements OnInit {

  candidatList!: Promise<Candidat[]>;
  
  constructor(
    private router : Router,
    private candidatService : CandidatService
  ) {}

  ngOnInit() {
    this.candidatList = this.candidatService.getCandidatList(true)
  }

  goToCandidat(candidat : Candidat) {
    this.router.navigate(['/candidat', candidat.id ]);
  }
}
