import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginModelBehaviorSubject: BehaviorSubject<Login | null>;
  public login!: Observable<Login | null> // ¿hay alguien logueado?

  constructor(
    private _http: HttpClient,
    private router: Router
  ) { 
    this.loginModelBehaviorSubject = new BehaviorSubject<Login | null>(JSON.parse(<string>localStorage?.getItem(LOGIN_KEY))); //TODO
    this.login = this.loginModelBehaviorSubject.asObservable();
  }

  //Guardar la sesión para no tener que recurrir al login siempre
  performLogin(entrada: Login): Observable<Login> {
    console.log('performLogin(' + JSON.stringify(entrada) + ')');
    return this
    ._http
    .post<Login>(environment.login, entrada)
    .pipe(map(retornoAPI => {
      //Hacer algo
      //retornoAPI.password = '';
      console.log('Login OK: '+JSON.stringify(retornoAPI) );
      this.loginModelBehaviorSubject.next(retornoAPI);
      localStorage.setItem(LOGIN_KEY, JSON.stringify(retornoAPI));
      return retornoAPI;
    }));
  }

  //Cierre de sesión
  performLogout(): void {
    localStorage.removeItem(LOGIN_KEY);
    this.loginModelBehaviorSubject.next(null);
    this.router.navigate(['/login']);
  }
}
