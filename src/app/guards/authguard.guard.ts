import { Login } from 'src/app/models/login.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  
  usuario!: Login | null;
  token!: String | undefined;
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.token !==undefined) {
      return true;
    } else {
      return true; //Cambiar esto para saber si estoy logueado
    }
  }

  constructor(
    private _loginService: LoginService,
  ) {
    this._loginService.login.subscribe(usuario => {
      this.usuario = usuario;
      this.token = this.usuario?.token;
    });
   }
  
}
