import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 candidatList! : Candidat [];
 candidat! : Candidat ;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private candidatService : CandidatService
  ) {}
  ngOnInit() {
    const candidatName : string| null  = this.route.snapshot.paramMap.get('name');
  }
}


// if(candidatName) {
//   this.candidatService.getCandidatList(candidatName).then((candidat : any)=>{
//     this.candidat = candidat
//   })
// }