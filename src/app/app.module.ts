import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { ProductComponent } from './Product/Product.component';
import { AboutComponent } from './About/About.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { TitanComponent } from './Titan/Titan.component';
import { FossilComponent } from './Fossil/Fossil.component';
import { FastrackComponent } from './Fastrack/Fastrack.component';
import { SonataComponent } from './Sonata/Sonata.component';
import { OmegaComponent } from './Omega/Omega.component';
import { FooterComponent } from './Footer/Footer.component';
import { WomensComponent } from './Womens/Womens.component';
import { MensComponent } from './Mens/Mens.component';
import { CouplesComponent } from './Couples/Couples.component';
import { KidsComponent } from './Kids/Kids.component';
import { CartComponent } from './Cart/Cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [																						
    AppComponent,
      HeaderComponent,
      HomeComponent,
      ProductComponent,
      AboutComponent,
      ContactUsComponent,
      TitanComponent,
      FossilComponent,
      FastrackComponent,
      SonataComponent,
      OmegaComponent,
      FooterComponent,
      WomensComponent,
      MensComponent,
      CouplesComponent,
      KidsComponent,
      CartComponent,
      LoginComponent,
      SignupComponent
   ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
