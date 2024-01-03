import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Authservice } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: Authservice, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('AuthGuard: User is authenticated.');
      return true;
    } else {
      console.log('AuthGuard: User is not authenticated. Redirecting to login page.');
      alert('Please log in to access.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}