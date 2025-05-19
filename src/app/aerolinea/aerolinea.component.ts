import { Component, OnInit } from '@angular/core';
import { AerolineaService } from './aerolinea.service';
import { Aerolinea } from './aerolinea';

@Component({
  selector: 'app-aerolinea',
  templateUrl: './aerolinea.component.html',
  styleUrls: ['./aerolinea.component.css']
})
export class AerolineaComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];

  constructor(private aerolineaService:AerolineaService) { }

  ngOnInit() {
    this.getAerolineas();
  }

  getAerolineas() {
    this.aerolineaService.getAerolineas().subscribe(aerolineas => {
      this.aerolineas = aerolineas;
      console.log(this.aerolineas);
    }
    );
  }
}
