import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product, ProductService } from '../Product.service';

@Component({
  selector: 'app-ProductForm',
  templateUrl: './ProductForm.component.html',
  styleUrls: ['./ProductForm.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  selectedImage: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.initProductForm();
  }

  initProductForm() {
    this.productForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      imageUrl: [''],
      category: ['', Validators.required]
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.selectedImage = file;

    // Optionally, you can display a preview of the selected image
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.productForm.patchValue({ imageUrl: e.target.result });
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    
  
    const productData: Product = this.productForm.value;
    
  
    if (productData.id) {
      // Existing product, update it
      this.productService.updateProduct(productData).subscribe(
        (updatedProduct: Product) => {
          console.log('Product updated successfully:', updatedProduct);
          
          // Optionally, you can perform additional actions after updating the product
        },
        error => {
          console.error('Failed to update product:', error);
          // Handle error if the product update fails
        }
      );
    } else {
      // New product, create it
      this.productService.createProduct(productData).subscribe(
        (createdProduct: Product) => {
          console.log('Product created successfully:', createdProduct);
          alert('Product created successfully');
          // Optionally, you can perform additional actions after creating the product
        },
        error => {
          console.error('Failed to create product:', error);
          // Handle error if the product creation fails
        }
        
      );
    }
    
  
    // Reset the form after submitting
    this.productForm.reset();
  
    // Display the form data in the console
    console.log('Form Data:', productData);
  }
}