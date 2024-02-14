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
  
  collaborateurList!: Promise<Candidat[]>;
  searchInput: string = '';

  constructor (
    private router : Router,
    private candidatService : CandidatService
  ){}

  ngOnInit() {
    // Initialiser la liste des collaborateurs
    this.collaborateurList = this.candidatService.getCandidatList(false);
  }
  
  goDetailCollab(candidat : Candidat) {
    // Rediriger vers les détails du collaborateur
    this.router.navigate(['/collaborateurs/', candidat.id])
  }

  onFilterChange(filter: string) {
    //Appeler service pour filtrer 
    this.candidatService.filterChange(filter) 
  }

  matchFilter(candidat : Candidat) {
    //Définir si on affiche un collaborataur
    return this.candidatService.searchFilter(candidat)
  }
}
