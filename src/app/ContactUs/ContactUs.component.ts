import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ContactUs',
  templateUrl: './ContactUs.component.html',
  styleUrls: ['./ContactUs.component.css']
})
export class ContactUsComponent implements OnInit {
  image0:string;
  constructor() {

    this.image0='/assets/images/contact4.avif';
   }

  ngOnInit() {
  }

}
