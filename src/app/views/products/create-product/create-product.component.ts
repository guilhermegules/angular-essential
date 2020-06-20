import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, [Validators.required, Validators.pattern(/\d/)]],
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.productForm.value).subscribe(() => {
      this.productService.showMessage('Produto adicionado com sucess!');
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
