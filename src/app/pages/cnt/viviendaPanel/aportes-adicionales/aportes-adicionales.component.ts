import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aportes-adicionales',
  templateUrl: './aportes-adicionales.component.html',
  styleUrls: ['./aportes-adicionales.component.css']
})
export class AportesAdicionalesComponent implements OnInit {

	  title = 'My first AGM project';
	  lat = 51.678418;
	  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
