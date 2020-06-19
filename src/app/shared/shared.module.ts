import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class SharedModule { }
