import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  mobile: string;
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'http://localhost:3000';
  private user: User | null = null;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/signup`);
  }

  getUser(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/signup/${userId}`);
  }

  getUserOrders(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ordered?userId=${userId}`);
  }

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cartItems`);
  }

  getUserCartItems(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cartItems?userId=${userId}`);
  }
  setUser(user: User): void {
    this.user = user;
  }
}