import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fundido } from '../animations';
declare var $: any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
                border: '5px solid yellow',
                backgroundColor: 'red'
            })),
            transition('inactive => active', animate('3s linear')),
            transition('active => inactive', animate('3s linear'))
        ]),
        fundido
    ]
})

export class TiendaComponent implements OnInit {
    public state: string;
    constructor() {
        this.state = 'inactive';
        console.log("Bienvenido");
    }

    ngOnInit(): void {
        $('#textojq').hide();
        $('#botonjq').click(function() {
            $('#textojq').slideToggle();
        });

        $('#caja').dotdotdot({});
    }

    cambiarEstado(state: string) {
        if(state == 'inactive') {
            this.state = 'active';
        } else {
            this.state = 'inactive';
        }

        console.log(this.state);
    }
}