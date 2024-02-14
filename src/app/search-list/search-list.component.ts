import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit{
  @Output() searchInput = new EventEmitter<string>();
  searchCtrl!:FormControl

  constructor (private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.searchCtrl = this.formBuilder.control('', [Validators.required])    
  }

  onFilterChange() {
    // Emettre la valeur du champ de recherche a chaque changement de valeur
    this.searchInput.emit(this.searchCtrl.value);
  }
}
