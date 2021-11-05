import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ImagesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule, // Empaquetado el carrusel
    FormsModule, // Los controles de formulario
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
