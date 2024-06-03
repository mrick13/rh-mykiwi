import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companies = [
    { name: 'MyKiwi', description: 'Ingenierie Web' },
    { name: 'Ferronnerie BAUD', description: 'Ferronnerie' },
    { name: 'Odentik', description: 'Distributeur de materiels et fournitures dentaires' }
  ];

  constructor() {}

  ngOnInit(): void {}

  GotoCompany(company: any) {
     
  }
}