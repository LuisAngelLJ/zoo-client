import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
    <h4>{{title}}</h4>
    <span *ngIf="emailContacto">
        <strong>Email de contacto</strong> {{emailContacto}}
        <button (click)="borrarEmail()">Eliminar email de contacto</button>
    </span>
  `
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar Email';
  emailContacto!: any;

  ngOnInit(): void {
      this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}