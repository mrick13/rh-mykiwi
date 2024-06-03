import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  GotoMyKiwi(company: any) {
    
  }
}