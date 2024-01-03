import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  // myimages:string;
  // image1:string;
  // image2:string;
  // image3:string;

   slides!: NodeListOf<Element>;
  index: number = 0;

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
  image18:string;
  image19:string;
  image20:string;
  image21:string;
  image22:string;
  image23:string;
  image24:string;
  image25:string;
  image26:string;
  image27:string;
  image28:string;
  image29:string;
  image30:string;
  image31:string;
  image32:string;
  image33:string;
  image34:string;
  image35:string;
  image36:string;
  image37:string;

  image38:string;
  image39:string;
  image40:string;
  image41:string;
  image42:string;
  image43:string;
  image44:string;
  image45:string;
  image46:string;
  image47:string;
  image48:string;

  image49:string;
  image50:string;
  image51:string;

  image52:string;



  constructor() {
  //   this.myimages='/assets/images/hme29.webp';
   
  //   this.image1= '/assets/images/hme31.webp';

  //   this.image2= '/assets/images/hme32.webp';

  //   this.image3= '/assets/images/hme33.webp';

    
  //  } this.image0='/assets/images/titan banner.avif';

    this.image1='/assets/images/left-banner-image.jpg';
   
    this.image2= '/assets/images/baner-right-image-01.jpg';

    this.image3= '/assets/images/baner-right-image-02.jpg';

    this.image4= '/assets/images/baner-right-image-03.jpg';

    this.image5= '/assets/images/women banner2.webp';

    this.image6= '/assets/images/watch3.jpg';

    this.image7= '/assets/images/gallery1.jpg';

    this.image8= '/assets/images/gallery2.jpg';

    this.image9= '/assets/images/gallery3.jpg';

    this.image10= '/assets/images/gallery2.jpg';
    
    this.image11= '/assets/images/gallery5.jpg';

    this.image12= '/assets/images/gallery6.jpg';

    this.image13= '/assets/images/gallery7.jpg';

    this.image14= '/assets/images/couples2.jpg';

    this.image15= '/assets/images/COUPLES1.webp';

    this.image16= '/assets/images/hm3_cleanup.gif';

    this.image17= '/assets/images/pinky.jpg';

    

    this.image18='/assets/images/titan1.webp';

    this.image19='/assets/images/titan2.webp';

    this.image20='/assets/images/titan3.webp';

    this.image21='/assets/images/titan4.webp';

    this.image22='/assets/images/titan5.webp';

    this.image23='/assets/images/titan6.webp';

    this.image24='/assets/images/titan7.webp';

    this.image25='/assets/images/titan8.webp';

    this.image26='/assets/images/titan9.webp';

    this.image27='/assets/images/titan10.webp';

    this.image28='/assets/images/titan11.webp';

    this.image29='/assets/images/titan12.webp';

    this.image30='/assets/images/titan13.webp';

    this.image31='/assets/images/titan14.webp';

    this.image32='/assets/images/titan15.webp';

    this.image33='/assets/images/titan16.webp';

    this.image34='/assets/images/titan17.webp';

    this.image35='/assets/images/titan18.webp';

    this.image36='/assets/images/titan19.webp';

    this.image37='/assets/images/titan20.webp';

    this.image38='/assets/images/bluewatch.jpg';
    this.image39='/assets/images/banner2.jpg';

    this.image40='/assets/images/banner3.avif';

this.image41='/assets/images/now3.webp';
this.image42='/assets/images/now4.webp';



this.image43='/assets/images/footer1.png';
this.image44='/assets/images/footer2.png';

this.image45='/assets/images/footer3.png';
this.image46='/assets/images/footer4.png';

this.image47='/assets/images/footer5.png';
this.image48='/assets/images/footer6.png';
this.image49='/assets/images/blog4.jpg';
this.image50='/assets/images/blog5.jpg';
this.image51='/assets/images/blog6.jpg';

this.image52='/assets/images/mainnew1.jpg';



  }

  ngOnInit() {
    this.slides = document.querySelectorAll('.home .slides-container .slide');
  }

  next() {
    this.slides[this.index].classList.remove('active');
    this.index = (this.index + 1) % this.slides.length;
    this.slides[this.index].classList.add('active');
  }

  prev() {
    this.slides[this.index].classList.remove('active');
    this.index = (this.index - 1 + this.slides.length) % this.slides.length;
    this.slides[this.index].classList.add('active');
  }
}