import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loader = true;
  constructor(  private fb: FormBuilder,) { }


  ngOnInit() {

    setTimeout(() => {
      this.loader=false;
    }, 1000);
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
