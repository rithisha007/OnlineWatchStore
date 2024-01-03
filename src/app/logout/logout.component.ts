import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  

    constructor(private router: Router, private authService: Authservice) { }
  
    ngOnInit() {
      this.logout();
    }
  
    logout() {
      const userEmail = this.authService.getUserEmail(); // Retrieve the user's email from the authentication service
  
      this.authService.logout(); // Call the logout method from the Authservice
  
      // Clear the cart items for the current user
      localStorage.removeItem(userEmail);
  
      // Show alert message
      alert('Logged out successfully');
  
      // Redirect to the login page
      this.router.navigate(['home']);
    }
  }