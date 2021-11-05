import { Component } from '@angular/core';
import { Login } from './models/login.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller Angular 5-11-21';

  usuario!: Login | null;

  constructor(
    private _loginService: LoginService,
  ){
    _loginService.login.subscribe(usuario => this.usuario = usuario);
   }

   hayUsuario(): boolean{
    return this.usuario != null;
   }

   logout(): void {
     this._loginService.performLogout();
   }
}
