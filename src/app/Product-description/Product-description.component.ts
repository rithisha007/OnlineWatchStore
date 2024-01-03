

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../Womens/ProductService.service';
import { HttpClient } from '@angular/common/http';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  productId!: number;
  product: any;
  activeImageIndex: number = 0; // Property to store the index of the currently hovered image.
  userEmail: string = '';
  mainImageURL: string = ''; // Initialize with an empty string
 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private http: HttpClient,
    private authService: Authservice,// Inject the Authservice
    private router: Router 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.getProductDetails();
    });

    // Retrieve the user's email from the authentication service
    this.userEmail = this.authService.getUserEmail();
  }

  getProductDetails() {
    this.productService.getProduct(this.productId).subscribe((data) => {
      this.product = data;
       // Set the mainImageURL to the thumbnail URL initially
       this.mainImageURL = this.product.thumbnail;
    });
  }


  onImageClick(imageURL: string) {
  
      this.mainImageURL = imageURL; // Set the mainImageURL to the clicked image URL
    
    console.log('Main product image URL:', this.product.thumbnail);
  }



  addToCart() {
    // Store the product in the cart locally
    const cartItems = localStorage.getItem('cartItems');
    const newCartItem   = {  //new object
      userEmail: this.userEmail,
      productId: this.product.id,
      title: this.product.title,
      price: this.product.price,
      quantity: 1
    };
    if (cartItems) {
      const existingCartItems = JSON.parse(cartItems);
      const productIndex = existingCartItems.findIndex((item: any) => item.productId === newCartItem.productId);
      if (productIndex !== -1) {
        existingCartItems[productIndex].quantity++;
      } else {
        existingCartItems.push(newCartItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    } else {
      const newCartItems = [newCartItem];
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    console.log('Product added to cart:', newCartItem);


    //this code for backend server using HTTP requests to manage the cart items stored in the db.json
    // Check if the product exists in db.json and update the quantity accordingly
    this.http.get<any>('http://localhost:3000/cartItems?userEmail=' + this.userEmail + '&productId=' + newCartItem.productId)
      .subscribe(
        (response: any) => {
          if (Array.isArray(response) && response.length > 0) {
            const existingCartItem = response[0];
            existingCartItem.quantity++;
            this.http.put('http://localhost:3000/cartItems/' + existingCartItem.id, existingCartItem)
              .subscribe(
                () => {
                  console.log('Product quantity updated in db.json:', existingCartItem);
                },
                error => {
                  console.error('Failed to update product quantity in db.json:', error);
                }
              );
          } else {
            // Product does not exist in db.json, add it as a new entry
            this.http.post('http://localhost:3000/cartItems', newCartItem)
              .subscribe(
                (response: any) => {
                  console.log('Product added to db.json:', response);
                },
                error => {
                  console.error('Failed to add product to db.json:', error);
                }
              );
          }

          // Show alert message
          alert('Product added to cart!');
        },
        error => {
          console.error('Failed to fetch product from db.json:', error);
        }
      );
  }

  handleBuyNowClick() {
    const queryParams = {         //Query parameters are used to pass data from one component to another in Angular.
      imageUrl: this.product.img, // Replace with the actual property name of the product's image URL
      name: this.product.title,
      price: this.product.price
    };
  
    this.router.navigate(['/checkout'], { queryParams });
  }

}


