import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  public title: string;
  public identity!: any;

  constructor(
    private _userService: UserService
  ) {
    this.title = 'Angular Avanzado';
  }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
  }
}
