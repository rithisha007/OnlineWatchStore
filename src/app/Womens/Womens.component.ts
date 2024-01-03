import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './ProductService.service';
@Component({
  selector: 'app-Womens',
  templateUrl: './Womens.component.html',
  styleUrls: ['./Womens.component.css']
})
export class WomensComponent implements OnInit {

  products: any;// Declare a variable to store the product data.

  constructor(private productService: ProductServiceService) { }// Inject the ProductServiceService into the component via the constructor.

  ngOnInit() {
    this.getProducts();// Call the getProducts method to fetch the product data and populate the 'products' variable.
  }

  getProducts() {

    
    this.productService.getProducts().subscribe((data) => {
       
      this.products = data;
    });
  }
}