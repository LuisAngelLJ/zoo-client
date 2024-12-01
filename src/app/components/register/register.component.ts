import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: String;
  public user: User;
  public status!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Registro';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
    console.log('Vista registro cargada');
  }

  onSubmit(form: any):any {
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user) {
          this.status = 'success';
          //this.user = new User('', '', '', '', '', 'ROLE_USER', '');
          form.reset();
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
