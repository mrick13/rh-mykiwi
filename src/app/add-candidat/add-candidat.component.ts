import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.scss'],
})
export class AddCandidatComponent implements OnInit {
  candidat!: Candidat;

  ngOnInit() {
    this.candidat = new Candidat();
  }
}
