import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private viewportScroller: ViewportScroller , private router: Router)
   { }

  
  ngOnInit(): void 

  {}
 
  


  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
  
  public onClickBut():void {
    this.router.navigate(['signup']);
  } 
  

}
