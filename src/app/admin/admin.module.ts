import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { UpdatemComponent } from './updatem/updatem.component';
import { UsermComponent } from './userm/userm.component';
import { ProductFormComponent } from './ProductForm/ProductForm.component';

const routes: Routes = [
  { path: 'admin/AdminDashboard', component: AdminDashboardComponent },
  { path: 'admin/updatem', component: UpdatemComponent },
  { path: 'admin/ProductForm', component: ProductFormComponent },
  { path: 'admin/userm', component: UsermComponent },
  // Add more routes for other admin pages if needed
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UpdatemComponent,
    UsermComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }