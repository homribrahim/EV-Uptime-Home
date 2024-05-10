import { Component, OnInit } from '@angular/core';
import pluggers from "src/app/models/pluggers.json";


@Component({
  selector: 'app-pluggers',
  templateUrl: './pluggers.component.html',
  styleUrls: ['./pluggers.component.scss']
})
export class PluggersComponent implements OnInit {


  pluggersData : any = pluggers;

  constructor() { }

  ngOnInit(): void {
  }

}
