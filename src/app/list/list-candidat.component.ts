import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.scss'],
  host: {
    class: 'full-size',
  },
})
export class ListCandidatComponent implements OnInit {
  candidatList!: Promise<Candidat[]>;
  searchInput: string = '';

  constructor(
    private router: Router,
    private candidatService: CandidatService
  ) {}

  ngOnInit() {
    // Initialiser la liste des candidats
    this.candidatList = this.candidatService.getCandidatList(true);
  }

  goToCandidat(candidat: Candidat) {
    // Rediriger vers les détails du candidat
    this.router.navigate(['/candidat', candidat.id]);
  }

  onFilterChange(filter: string) {
    //Appeler service pour filtrer 
    this.candidatService.filterChange(filter)
  }

  matchFilter(candidat : Candidat) {
    //Définir si on affiche un candidat
    return this.candidatService.searchFilter(candidat)
  }
}
