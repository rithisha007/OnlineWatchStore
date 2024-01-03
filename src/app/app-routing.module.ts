import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { HomeComponent } from './Home/Home.component';
import { ProductComponent } from './Product/Product.component';
import { TitanComponent } from './Titan/Titan.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDescriptionComponent } from './Product-description/Product-description.component';
import { AuthGuard } from './auth.guard';
import { WomensComponent } from './Womens/Womens.component';
 import { CartComponent } from '../app/Cart/Cart.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './MyAccount/MyAccount.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
    path:'womens',
    component:WomensComponent
  },
  {
    path:'titan',
    component:TitanComponent
  },
  {
    path:'fastrack',
    component:WomensComponent
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
    path:'products/:id',
    component:ProductDescriptionComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent
  },
 
  {
    path:'checkout',
    component:CheckoutComponent
  },

  { path: 'Cart', 
    component: CartComponent 
  },
  { path: 'checkout/Cart', 
    component: CheckoutComponent 
  },
  { path: 'womens', 
    component: WomensComponent
   },
  { path: 'checkout/womens',
     component: CheckoutComponent 
    },
  {
    path:'thankyou',
    component:ThankyouComponent
    },
  {
    path:"myaccount",
    component:MyAccountComponent
  },
 {
  path:'**',
  redirectTo:'home',
  pathMatch:'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
