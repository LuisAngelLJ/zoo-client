import { Component, DoCheck, OnDestroy } from '@angular/core';
import { fundido } from '../animations';
/*
OnChanges - es el primero que se va a ejecutar a cualquier cambio en las propiedades
*/
@Component({
  selector: 'hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
  animations: [fundido]
})
export class HooksComponent implements DoCheck, OnDestroy {
  public nombre!: string;
  constructor() {
  }

  ngDoCheck() {
    //console.log("se ha hecho un cambio");
  }

  ngOnDestroy(): void {
    console.log("Se ha eliminado algo");
  }

}
