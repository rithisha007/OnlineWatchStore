import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  private loggedInUserKey = environment.LoggedInUserKey; // Key for storing the logged-in user in local storage
  private adminEmail = environment.AdminEmail;
  setUser: any;
  constructor(private http: HttpClient){}

  login(user: any) {
    localStorage.setItem(this.loggedInUserKey, JSON.stringify(user)); // Store the user data in local storage
  }

  logout() {
    localStorage.removeItem(this.loggedInUserKey); // Clear the user data from local storage
  }

  getLoggedInUser() {
    const user = localStorage.getItem(this.loggedInUserKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.loggedInUserKey);
  }
 getUserEmail() {
    const user = this.getLoggedInUser();
    return user ? user.email : null;
  }
  isAuthenticated() {
    return this.isLoggedIn(); // Invoke the isLoggedIn function to return its result
  }
  
getUserId(): number {
  const user = this.getLoggedInUser();
  return user ? user.id : null;
}


getUserDetails(userEmail: string): Observable<any[]> {
  const url = `${environment.UserDetails}?email=${userEmail}`;
  return this.http.get<any[]>(url);
}


isUserAdmin() {
  const email = this.getUserEmail();
  return email === this.adminEmail;
}


}

