import { Component, OnInit } from '@angular/core';
import { Company } from '../models/candidat/company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  company : Company | undefined;

  constructor (
    private route : ActivatedRoute , 
    private companyService: CompanyService,
  ) {}

  ngOnInit () {
    const companyId: string | null = this.route.snapshot.paramMap.get('id');
    if(companyId) {
      this.companyService.getCompanyById(companyId).then((company : any) =>{
        this.company = company;
      });
    } else {
      this.company = undefined;
    }
  }
}
