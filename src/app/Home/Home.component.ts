import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  myimages:string;
  image1:string;
  image2:string;
  image3:string;

  constructor() {
    this.myimages='/assets/images/hme29.webp';
   
    this.image1= '/assets/images/hme31.webp';

    this.image2= '/assets/images/hme32.webp';

    this.image3= '/assets/images/hme33.webp';

    
   }

  ngOnInit() {
   
  }

}
