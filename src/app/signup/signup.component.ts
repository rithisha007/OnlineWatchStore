import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor( private formbuilder : FormBuilder, private http:HttpClient, private router:Router ) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      fullname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
}
signup(){
  this.http.post<any>("http://localhost:3000/signup",this.signupForm.value)
  .subscribe(res=>{
    alert("Sign up successfull")
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>{
    alert("something went wrong")

  })
}


  }