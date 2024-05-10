import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
