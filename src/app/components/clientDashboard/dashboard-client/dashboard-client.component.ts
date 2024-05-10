import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss']
})
export class DashboardClientComponent implements OnInit {

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
