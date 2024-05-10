import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up-supplier',
  templateUrl: './sign-up-supplier.component.html',
  styleUrls: ['./sign-up-supplier.component.scss']
})
export class SignUpSupplierComponent implements OnInit {

  public signUpForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loader=true;
  

  constructor(
    
    private fb: FormBuilder,
    private http:HttpClient,
    private router: Router,
    
    ) 
  {}

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  ngOnInit() {
    setTimeout(() => {
      this.loader=false;
    }, 1000);
    this.signUpForm = this.fb.group({
      stationName: ['', Validators.required],
      Phone: ['', Validators.required],
      Enseigne: ['', Validators.required],
      Region: ['', Validators.required],
      Location: ['', Validators.required],
      Address: ['', Validators.required],
      Email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(): void 
  {
    console.log(this.signUpForm.getRawValue())
    this.http.post('http://localhost:8000/api/register',this.signUpForm.getRawValue())
      .subscribe(res=>
        {
         
          setTimeout(() => {
            this.router.navigate(["/login"]);
          }, 1000);
      
        }
      )
  }

  



}
