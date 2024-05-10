import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message = "You ARE NOT LOGGED IN !"
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user',{withCredentials:true})
    .subscribe(
      (res:any)=>
        {
          console.log(res);
          this.message = `Hi ${res.stationName}`;
        }
      
     
      
    )
  }

}
/* 
(res:any) => {
  console.log(res)
  this.message = `Hi ${res.stationName}`;
},
err => {
  this.message ="Fuckk Off , You Are Not logged In"
} */