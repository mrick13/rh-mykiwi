import { Component, OnChanges, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  hideHeader: boolean = false;

  constructor(private router: Router , private authService: AuthService,) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        // Cacher le contenu du header si il y a /login ou /registration dans l'url
        this.hideHeader =
          (event.url === '/login' || event.url === '/registration');
      }
    });
  }

  onLogout() {
    // déconnecter l'utilisateur
    this.authService.logout()
  }
}