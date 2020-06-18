import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ViewsRoutingModule } from './views-routing.module';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './products/create-product/create-product.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, CreateProductComponent],
  imports: [MatButtonModule, MatCardModule, CommonModule, ViewsRoutingModule],
  exports: [HomeComponent, ProductsComponent],
})
export class ViewsModule {}
