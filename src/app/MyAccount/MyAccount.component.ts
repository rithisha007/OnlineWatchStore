import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersComponent } from '../Orders/Orders.component';

@Component({
  selector: 'app-MyAccount',
  templateUrl: './MyAccount.component.html',
  styleUrls: ['./MyAccount.component.css']
})
export class MyAccountComponent implements OnInit {

  activeTab: string = 'dashboard-tab';

  constructor() { }

  ngOnInit(): void {
  }



  isTabActive(tab: string): boolean {
    return this.activeTab === tab;
  }




  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

}