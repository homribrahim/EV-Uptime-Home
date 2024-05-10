import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {

  message :any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user',{withCredentials:true})
    .subscribe(
      (res:any)=>
        {
          console.log(res);
          this.message = `${res.stationName}`;
        }
   
    )
  }

}
