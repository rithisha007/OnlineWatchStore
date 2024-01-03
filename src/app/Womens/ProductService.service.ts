import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }
  getProduct(productId: number) {
    return this.http.get(`http://localhost:3000/products/${productId}`);
  }
}