import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authservice } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedInUser: any;
  products: any[] = [];
  signupDetails: any[] = [];
  showSidebar: boolean = false;
  activeTab: string | undefined;

  constructor(
    private authService: Authservice,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
   
    this.setActiveTab(this.router.url);

   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveTab(event.url);
      }
    });
  }

  setActiveTab(urlPath: string) {
  
    const pathsToTabs: { [key: string]: string } = {
      '/home': 'Home',
      '/product': 'Product',
      '/about': 'About',
      '/contactus': 'Contact Us',
      '/Cart': 'Cart',
      '/login': 'Login',
      '/myaccount': 'My Account',
      '/':'Home'
    };

    
    for (const path in pathsToTabs) {
      if (urlPath.includes(path)) {
        this.activeTab = pathsToTabs[path];
        break;
      }
    }
    if (!this.activeTab) {
      this.activeTab = undefined;
    }
  }

  logout() {
    const userEmail = this.authService.getUserEmail(); 

    this.authService.logout(); 

    localStorage.removeItem(userEmail);
   
    alert('Logged out successfully');

    this.router.navigate(['home']);
  }
}
