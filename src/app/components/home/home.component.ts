import { Component } from '@angular/core';
import { fundido } from '../animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fundido]
})
export class HomeComponent {
  title = "Bienvenido a la aplicación";
  constructor() {}
}