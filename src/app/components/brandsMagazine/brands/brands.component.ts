import { Component,OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import brands from "src/app/models/brands.json";
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {


  brandData: any = brands;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onNav () 
  {
    this.router.navigate(["/dashboard/add-model"]); 
   }

}
