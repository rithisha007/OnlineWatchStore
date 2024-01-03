import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../Order.service';
import { Order } from '../models/Order';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  authService: any;
  totalAmount: number | null | undefined;

  constructor(private orderService: OrderService, private authservice:Authservice) {}

  ngOnInit() {
    this.fetchOrders();
  }
  fetchOrders() {
    const userEmail = this.authservice.getUserEmail();
    if (userEmail) {
      this.authservice.getUserDetails(userEmail).subscribe(
        (response: any[]) => {
          this.orders = response[0]?.ordered || [];
          const totalAmount = response[0]?.totalAmount;
          this.totalAmount = typeof totalAmount === 'number' ? totalAmount : null;
          console.log('Orders fetched successfully:', this.orders);
        },
        (error: any) => {
          console.error('Error fetching orders:', error);
        }
      );
    } else {
      console.error('User email not available');
    }
  }
  
  cancelOrder(order: Order) {
    console.log('Cancel order:', order);
  
    if (!order || !order.id || typeof order.id !== 'number') {
      console.error('Invalid orderId');
      return;
    }
  
    const orderId = order.id;
  
    this.orderService.cancelOrder(orderId).subscribe(
      () => {
        console.log('Order canceled successfully.');
        this.orders = this.orders.filter(o => o.id !== orderId); // Remove the canceled order from the orders list
        this.updateTotalAmount(); // Update the total amount after canceling the order
      },
      (error: any) => {
        console.error('Error canceling order:', error);
      }
    );
  }
  
    
  

  updateTotalAmount() {
    // Calculate the updated total amount based on the remaining orders
    this.totalAmount = this.orders.reduce((total, order) => total + Number(order.fullPrice), 0);
  }
  

  getCurrentDateTime(): string {
    const currentDate = new Date();
    return currentDate.toISOString(); // Adjust the formatting as per your requirements
  }
}