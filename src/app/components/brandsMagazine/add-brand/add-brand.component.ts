import { Component, OnInit } from '@angular/core';
/* import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router"; */

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  brand!:any;
  description!:any;

  constructor( ) { }

  ngOnInit(): void {
  }

 /*  onAddBrand() {
    this.toastr.success("Brand Added Successfuly", "Succès");
    setTimeout(() => {
      this.router.navigate(["add-model"]);
    }, 2000);
   

  } */
}
