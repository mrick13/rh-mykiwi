import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router : Router
  ) { }

  canActivate(): boolean {
    // Vérifier si l'utilisateur est connecté
    if(this.authService.isLoggedIn) {
      return true;
    }
    // Rediriger l'utilisateur dans le formulaire de connexion s'il n'est pas connecté
    this.router.navigate(['/login']);
    return false;
  }
}
  
