import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientTestingModule,
    RouterTestingModule
  ],
  exports: [
    HttpClientTestingModule,
    RouterTestingModule
  ]
})
export class TestingModule { }
