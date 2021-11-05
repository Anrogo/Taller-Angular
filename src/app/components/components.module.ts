import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ImagesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbModule, // Empaquetado el carrusel
    FormsModule, // Los controles de formulario
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbPaginationModule,
  ]
})
export class ComponentsModule { }
