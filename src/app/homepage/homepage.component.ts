import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/candidat/company';
import { CompanyService } from '../company.service';
import { Candidat } from '../models/candidat/candidat';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companyList!: Promise<Company[]>

  constructor(private router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    // Initialiser la liste des entreprises
    this.companyList = this.companyService.getCompanyList(true);
  }

  GotoCompany(company: any) {
    
  }
}