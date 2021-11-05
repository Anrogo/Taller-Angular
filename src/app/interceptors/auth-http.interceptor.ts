import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  usuario!: Login | null;
  token!: String | undefined;

  constructor(
    private _loginService: LoginService,
  ) {
    this._loginService.login.subscribe(usuario => {
      this.usuario = usuario;
      this.token = this.usuario?.token;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.token !== undefined){ //Si existe usuario
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${this.token}` //Añado token
        }
      });
    }
    return next.handle(request).pipe(tap(e=>{}),finalize((()=>{
      console.log(request.url + `método ${request.method}`)
    }))); //Ejecutar la petición
  }

}
