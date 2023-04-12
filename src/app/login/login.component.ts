import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  constructor(private formbuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup")
      .subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if(user){
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['product'])
        }else{
          alert("user not found");
        }
      }
        )
  }

}