import { Component, OnInit } from '@angular/core';
import { Authservice } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  activeTab: string = 'user-details';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  constructor(public authService: Authservice, private router: Router) {}

  logout() {
    this.authService.logout();
    alert('Admin Logout Successful');
    this.router.navigate(['/header']); // Replace '/' with the route for your home page
  }
  

  

  ngOnInit(): void {
  }

  
}