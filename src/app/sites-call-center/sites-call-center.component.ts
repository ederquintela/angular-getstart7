import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites-call-center',
  templateUrl: './sites-call-center.component.html',
  styleUrls: ['./sites-call-center.component.css']
})
export class SitesCallCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Criado Componente Sites Call Center")
  }

}
