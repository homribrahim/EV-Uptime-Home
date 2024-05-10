import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import appointements_client from  "src/app/models/appointement_client.json";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-appointements-client',
  templateUrl: './appointements-client.component.html',
  styleUrls: ['./appointements-client.component.scss']
})
export class AppointementsClientComponent implements OnInit {

  appointementsData : any = appointements_client;

  constructor() { }

  ngOnInit(): void {
    console.log(this.appointementsData)
  }

}
