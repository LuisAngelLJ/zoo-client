import { Component } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  title = 'Listado';
  animals = ['Oso Panda', 'Tigre', 'Leon', 'Puma'];
}