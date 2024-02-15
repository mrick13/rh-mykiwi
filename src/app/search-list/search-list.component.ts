import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit, OnChanges {

  @Output() searchInput = new EventEmitter<string>();
  @Input() placeholder!: string ;

  searchCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnChanges() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Changer le placeholder selon la liste de candidat ou collaborateur
        if (event.url === '/candidat') {
          console.log('candidat');
          this.placeholder = 'Recherchez votre Candidat';
          console.log(this.placeholder);
        }
        this.placeholder = ' Recherchez votre Collaborateur';
        console.log(this.placeholder);
      }
    });
  }

  ngOnInit() {
    this.searchCtrl = this.formBuilder.control('', [Validators.required]);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Changer le placeholder selon la liste de candidat ou collaborateur
        if (event.url === '/candidat') {
          console.log('candidat');

          this.placeholder = 'Recherchez votre Candidat';
          console.log(this.placeholder);
        } else if (event.url === '/collaborateur') {
          console.log('collabo');

          this.placeholder = ' Recherchez votre Collaborateur';
          console.log(this.placeholder);
        }
      }
    });
  }

  onFilterChange() {
    // Emettre la valeur du champ de recherche a chaque changement de valeur
    this.searchInput.emit(this.searchCtrl.value);
  }
}
