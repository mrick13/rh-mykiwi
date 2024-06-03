import { Component, OnInit} from '@angular/core';
import { Company } from '../models/candidat/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit{
company!: Company;

ngOnInit () {
  this.company = new Company
  
}
}
