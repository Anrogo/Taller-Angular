import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  enviado: boolean = false;
  spinner: boolean = false;
  errorMsg!: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private router: Router,
  ) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // Ejecuta la acción de login
  submitForm(): void {
    this.enviado = true;
    // Si no es válido, no hago nada
    if(!this.loginForm.valid) {
      return;
    } else {
      //Activo el spinner de cargando:
      this.spinner = true;
      //Y si es válido llamamos al servicio de login:
      this._loginService.performLogin(
        new Login(
          this.loginForm.controls.username.value,
          this.loginForm.controls.password.value,
          ''))
      .subscribe(
        respuesta => {
        console.log(JSON.stringify(respuesta));
        this.errorMsg = null;
        this.spinner = false;
      },
      error => {
        console.log(JSON.stringify(error));
        this.errorMsg = `⚠️ ¡No se ha podido iniciar la sesión! ${error?.error?.error}`;
        this.spinner = false;
      });
    }
  }
}
