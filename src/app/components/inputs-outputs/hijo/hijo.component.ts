//importar Input para recibir
//importar Output para enviar y EventEmitter
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnChanges {
  @Input() nombrePadre!: string;
  //declaro el evento que va a pasar el bloque de valores que quiero
  @Output() enviarValor = new EventEmitter();
  public estefania: string;
  public corey: string;
  public veronica: string;
  constructor() {
    this.estefania = 'Estefania';
    this.corey = 'caorey yael';
    this.veronica = 'veronica salgado';
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  emitirEvento() {
    this.enviarValor.emit({
      'noviaUno': this.estefania,
      'noviaDos': this.corey,
      'noviaTres': this.veronica
    });
  }
}
