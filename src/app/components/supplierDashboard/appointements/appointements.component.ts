import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import appointements from  "src/app/models/appointement.json";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointements',
  templateUrl: './appointements.component.html',
  styleUrls: ['./appointements.component.scss']
})
export class AppointementsComponent implements OnInit {

  appointementsClientsData : any = appointements;

  constructor() { }

  ngOnInit(): void {
  }

}
