import { Component, OnInit } from '@angular/core';
import { fundido } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fundido]
})
export class ContactComponent implements OnInit {
  public emailContacto: string;
  constructor() {
    this.emailContacto = '';
  }

  ngOnInit(): void {
  }
}
