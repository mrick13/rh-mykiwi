import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { Candidat } from '../models/candidat/candidat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  candidat: Candidat | undefined

  constructor (
    private route: ActivatedRoute,
    private candidatService: CandidatService
  ) {}

  ngOnInit() {
    const candidatId : string | null = this.route.snapshot.paramMap.get('id'); 
    if(candidatId) {
      this.candidatService.getCandidatById(candidatId).then((candidat: any)=>{
        this.candidat = candidat
      })
    } else {
      this.candidat = undefined ;
    }
  }

}
