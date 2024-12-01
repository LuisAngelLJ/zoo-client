import { Component, OnInit } from '@angular/core';
import { fundido } from '../../animations';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  animations: [fundido]
})
export class PadreComponent implements OnInit {
  public nombrePadre!: string;
  //declaro la propiedad que voy a recibir del hijo
  public hijo!: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  mostrarNombre() {
    console.log(this.nombrePadre);
  }

  //recibo el evento emmit en una función
  getHijo(event: any) {
    console.log(this.hijo = event);
    this.hijo = event;
  }

}
