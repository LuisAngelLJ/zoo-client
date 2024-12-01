import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: String;
  public user: User;
  public identity!: any;
  public token!: any;
  public status!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Inicio de sesión';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
    console.log('Vista Login cargada');
    console.log(localStorage.getItem('identity'));
    console.log(localStorage.getItem('token'));
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit() {
    this._userService.singup(this.user).subscribe(
      response => {
        this.identity = response; 

        if(!this.identity.coincidencia || !this.identity.coincidencia._id) {
          console.log("Usuario no logeado correctamente");
        } else {
          //no mostrar el password
          delete this.identity.coincidencia.password;
          //mostrar identity
          //console.log(this.identity.coincidencia);

          //persistir la sesió del usuario
          localStorage.setItem('identity', JSON.stringify(this.identity.coincidencia));

          //conseguir el token
          this._userService.singup(this.user, true).subscribe(
            response => {
              this.token = response;
      
              if(this.token.length <= 0) {
                console.log("El token no se ha generado");
              } else {
                //mostrar token
                //console.log(this.token);
                localStorage.setItem('token', this.token);
                this.status = 'success';
              }
            },
            error => {
              console.log(<any>error);
            }
          );
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null) {
          var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
  }

}
