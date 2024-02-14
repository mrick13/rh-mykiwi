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
    this.candidatList = this.candidatService.getCandidatList(true);
  }

  goToCandidat(candidat: Candidat) {
    this.router.navigate(['/candidat', candidat.id]);
  }

  onFilterChange(filter: string) {
    this.searchInput = filter
    this.candidatService.filterChange(this.searchInput)
  }

  matchFilter(candidat : Candidat) {
    return this.candidatService.searchFilter(candidat)
  }
}
