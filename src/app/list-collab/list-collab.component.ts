import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { Candidat } from '../models/candidat/candidat';

@Component({
  selector: 'app-list-collab',
  templateUrl: './list-collab.component.html',
  styleUrls: ['./list-collab.component.scss']
})
export class ListCollabComponent implements OnInit{
  candidatList!: Promise<Candidat[]>;
  searchInput: string = '';

  constructor (
    private router : Router,
    private candidatService : CandidatService
  ){}

  ngOnInit() {
    this.candidatList = this.candidatService.getCandidatList(false);
    
  }

  goToCollab(candidat : Candidat) {
    if(candidat.isRecruited === true) {
      this.router.navigate(['/collaborateurs/', candidat.id])
    }
  }
// 
  onFilterChange(filter: string) {
    this.searchInput = filter
    console.log(this.searchInput);
    this.candidatService.filterChange(this.searchInput)
  }

  matchFilter(candidat : Candidat) {
    return this.candidatService.searchFilter(candidat)
  }
}
