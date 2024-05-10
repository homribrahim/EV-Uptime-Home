import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import brands from "src/app/models/brands.json";
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  brandData: any = brands;  
  brand: any ;
  brandId: any;
  constructor(private viewportScroller: ViewportScroller , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('id');
    this.brand = this.brandData.find(brand => brand.id.toString() === this.brandId);
  }

}
