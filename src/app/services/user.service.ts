import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
import {map} from 'rxjs/operators'; 
import { User } from 'src/app/models/user';

@Injectable()
export class UserService {
    public url: string;
    public ident: any;
    public token!: any;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
        this.ident = null;
    }

    register(user_to_register: User):Observable<any> {
        let params = JSON.stringify(user_to_register);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'register', params, {headers});
    }

    singup(user_to_login: any, gettoken = false) {
        if(gettoken != false) {
            //me marcaba un error al agregar una nueva propiedad al objeto y los solucione poniendo el user tipo any en vez de tipo user
            user_to_login.gettoken = gettoken;
        }

        let params = JSON.stringify(user_to_login);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'login', params, {headers});
    }


    //puedo importar este servicio en el app.ts para usar estos dos metodos de forma global
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity')!);

        if(identity !== "undefined") {
            this.ident = identity;
        } else {
            this.ident = null;
        }

        return this.ident;
    }

    getToken() {
        let token = localStorage.getItem('token');

        if(token !== "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }
}