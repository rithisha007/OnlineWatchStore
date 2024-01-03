import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  image0:string;
  image1:string;
  image2:string;
  image3:string;
  image4:string;
  image5:string;
  image6:string;
  

  constructor() {
    this.image0='/assets/images/about6.jpg';

    this.image1='/assets/images/gallery1.jpg';
   
    this.image2= '/assets/images/gallery2.jpg';

    this.image3= '/assets/images/gallery3.jpg';

    this.image4= '/assets/images/gallery7.jpg';

    this.image5= '/assets/images/gallery5.jpg';

    this.image6= '/assets/images/gallery6.jpg';

    

   }

  ngOnInit() {
  }

}
