import { Component } from '@angular/core';
import { Authservice } from './auth.service';

declare var name:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = '1st-app';
   products:any;

   constructor(public authService: Authservice)
{}

  

}

