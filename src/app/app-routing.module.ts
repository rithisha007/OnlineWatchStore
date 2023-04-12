import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { HomeComponent } from './Home/Home.component';
import { ProductComponent } from './Product/Product.component';
import { TitanComponent } from './Titan/Titan.component';
import { FastrackComponent } from './Fastrack/Fastrack.component';
import { CartComponent } from './Cart/Cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProductComponent,
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'titan',
    component:TitanComponent
  },
  {
    path:'fastrack',
    component:FastrackComponent
  },
  {
    path:'Cart',
    component:CartComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
