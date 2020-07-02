import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product.model';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.scss'],
})
export class RemoveProductComponent implements OnInit {
  product: Product;
  removalProductForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getProductForDelete();
  }

  removeProduct(id: number): void {
    const newId = id.toString();
    this.productService.removeProduct(newId).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  getProductForDelete(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.removalProductForm.get('name').setValue(product.name);
      this.removalProductForm.get('price').setValue(product.price);
    });
  }

  initForm(): void {
    this.removalProductForm = this.formBuilder.group({
      name: [null],
      price: [null]
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
