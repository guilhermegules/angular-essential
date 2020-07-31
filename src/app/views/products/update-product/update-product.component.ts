import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  productUpdateForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getProductForUpdate();
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  initForm(): void {
    this.productUpdateForm = this.formBuilder.group({
      name: [null],
      price: [null, Validators.pattern(/\d/)],
    });
  }

  getProductForUpdate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
      this.productUpdateForm.get('name').setValue(this.product.name);
      this.productUpdateForm.get('price').setValue(this.product.price);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
