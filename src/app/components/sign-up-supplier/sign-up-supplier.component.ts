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
    private router: Router,
    ) 
  {}

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
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }



}
