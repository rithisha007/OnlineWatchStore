import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './models/account';
import { Authservice } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:3000/signup';

  constructor(private http: HttpClient, private authService: Authservice) {}

  getAccount(): Observable<Account> {
    const userId = this.authService.getUserId();
    return this.http.get<Account>(`${this.apiUrl}/${userId}`);
  }

  updateAccount(account: Account): Observable<void> {
    const userId = this.authService.getUserId();
    return this.http.put<void>(`${this.apiUrl}/${userId}`, account);
  }


  updateAddress(userId: number, address: string, mobile: string): Observable<any> {
    const url = `${this.apiUrl}/updateUserAddress/${userId}`;
    const payload = { address, mobile };
    return this.http.put(url, payload);
  }
  
}

