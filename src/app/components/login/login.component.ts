import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  

  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loader = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http:HttpClient
    
  ) {}

  
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  ngOnInit() {

    setTimeout(() => {
      this.loader=false;
    }, 1000);
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(): void 
  {
    console.log(this.loginForm.getRawValue())
    this.http.post('http://localhost:8000/api/login',this.loginForm.getRawValue(), {withCredentials:true})
      .subscribe( ()=>
            this.router.navigate(["/dashboard"])
  
      )
  }
  
    
  
}
