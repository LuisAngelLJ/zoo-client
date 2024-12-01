import { Component } from '@angular/core';
import { fundido } from '../animations';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css'],
    animations: [fundido]
})

export class ParquesComponent {
    public disponible: boolean;
    constructor() {
        this.disponible = true;
    }
}