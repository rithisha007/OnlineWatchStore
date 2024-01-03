import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../Product.service';

@Component({
  selector: 'app-updatem',
  templateUrl: './updatem.component.html',
  styleUrls: ['./updatem.component.css']
})
export class UpdatemComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      error => {
        console.error('Failed to load products', error);
      }
    );
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product }; // Create a copy of the product to prevent direct modification
  }

  cancelEdit() {
    this.selectedProduct = null;
  }

  saveProduct() {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct).subscribe(
        (updatedProduct: Product) => {
          console.log('Product updated successfully:', updatedProduct);
          alert('Product updated successfully');
          // Optionally, you can perform additional actions after updating the product
          this.loadProducts(); // Refresh the product list
          this.selectedProduct = null; // Clear the selected product
        },
        error => {
          console.error('Failed to update product:', error);
          alert('Failed to update product');
          // Handle error if the product update fails
        }
      );
    }
  }
  updateProduct() {
    // Implement the logic to update the selected product
  }
  
  
  



  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        alert('Product deleted successfully');
        // Optionally, you can perform additional actions after deleting the product
        this.loadProducts(); // Refresh the product list
      },
      error => {
        console.error('Failed to delete product', error);
        alert('Failed to delete product');
        // Handle error if the product deletion fails
      }
    );
  }
}