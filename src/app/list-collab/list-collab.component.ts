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

  constructor (
    private router : Router,
    private candidatService : CandidatService
  ){}

  ngOnInit() {
    this.candidatList = this.candidatService.getCandidatList(false);
    console.log('la ');
    
  }

  goToCollab(candidat : Candidat) {
    if(candidat.isRecruited === true) {
      this.router.navigate(['/collaborateurs/', candidat.id])
    } 
    console.log('Pas de collaborateurs disponible');
  }
}
