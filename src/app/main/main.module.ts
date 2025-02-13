import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MainRoutingModule } from './main-routing.module';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ShortenerComponent
  ],
  imports: [FormsModule, MatFormFieldModule,
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
