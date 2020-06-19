import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    name: 'Produto de Test',
    price: 125.2,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  addProduct(): void {
    this.productService.AddProduct(this.product).subscribe(() => {
      this.productService.showMessage('Product added with success!');
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
