import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-detalleAerolinea',
  templateUrl: './detalleAerolinea.component.html',
  styleUrls: ['./detalleAerolinea.component.css']
})
export class DetalleAerolineaComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];

  constructor(private aerolineaService: AerolineaService) { }

  ngOnInit() {
  this.aerolineaService.getAerolineas().subscribe((aerolineas) => {
    this.aerolineas = aerolineas;
  });
}
}
