import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    NgbModule, // Empaquetado el carrusel
    FormsModule // Los controles de formulario
  ]
})
export class ComponentsModule { }
