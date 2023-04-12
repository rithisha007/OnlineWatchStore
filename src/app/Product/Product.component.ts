import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {
  image0:string;
  image1:string;
  image2:string;
  image3:string;
  image4:string;
  image5:string;
  image6:string;
  image7:string;
  image8:string;
  image9:string;
  image10:string;
  image11:string;
  image12:string;
  image13:string;
  image14:string;
  image15:string;
  image16:string;
  image17:string;

  constructor() { 
    this.image0='/assets/images/titan banner.avif';

    this.image1='/assets/images/HER1.webp';
   
    this.image2= '/assets/images/HIM1.webp';

    this.image3= '/assets/images/COUPLES1.webp';

    this.image4= '/assets/images/kIDSS.webp';

    this.image5= '/assets/images/titann.jpg';

    this.image6= '/assets/images/fossil.jpg';

    this.image7= '/assets/images/fastrack.jpg';

    this.image8= '/assets/images/sonata.webp';

    this.image9= '/assets/images/omega.avif';

    this.image10= '/assets/images/image 5.jpg';
    
    this.image11= '/assets/images/image 6.jpg';

    this.image12= '/assets/images/image 10.jpg';

    this.image13= '/assets/images/image 8.jpg';

    this.image14= '/assets/images/image 11.jpg';

    this.image15= '/assets/images/123.jpg';

    this.image16= '/assets/images/hm3_cleanup.gif';

    this.image17= '/assets/images/pinky.jpg';

    


  }

  ngOnInit() {
  }

}
