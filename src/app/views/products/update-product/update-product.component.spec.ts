import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FormTestingModule } from './../../../../testing/form-testing.module';
import { ProductService } from './../../../services/product/product.service';
import { TestingModule } from './../../../../testing/testing.module';
import { UpdateProductComponent } from './update-product.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UpdateProductComponent', () => {
  let component: UpdateProductComponent;
  let spectator: Spectator<UpdateProductComponent>;
  let productService: ProductService;
  let router: Router;

  const createComponent = createComponentFactory({
    component: UpdateProductComponent,
    imports: [TestingModule, FormTestingModule],
    shallow: true
  });

  beforeEach(async () => {
    spectator = createComponent();
    component = spectator.component;

    productService = spectator.inject(ProductService);
    router = spectator.inject(Router);

    spectator.detectChanges();
    await spectator.fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {
    it('should init form with null values', () => {
      component.initForm();

      expect(component.productUpdateForm.get('name').value).toBeNull();
      expect(component.productUpdateForm.get('price').value).toBeNull();
    });

    it('should have pattern Validator error', () => {
      component.initForm();

      component.productUpdateForm.get('price').setValidators(Validators.pattern(/\d/));
      component.productUpdateForm.get('price').setValue('invalid value');

      expect(component.productUpdateForm.get('price').hasError('pattern')).toBeTruthy();
    });


    it('should not have pattern Validator error', () => {
      component.initForm();

      component.productUpdateForm.get('price').setValidators(Validators.pattern(/\d/));
      component.productUpdateForm.get('price').setValue(100);

      expect(component.productUpdateForm.get('price').hasError('pattern')).toBeFalsy();
    });
  });

  describe('Cancel', () => {
    it('should redirect to products', () => {
      jest.spyOn(router, 'navigate').mockImplementation();

      component.cancel();

      expect(router.navigate).toHaveBeenCalledWith(['/products'])
    });
  });

  describe('getProductForUpdate', () => {
    it('should get value of product to be updated', () => {
      jest.spyOn(productService, 'getProductById').mockImplementation(() => of({ name: 'test product', price: 99 }));

      component.getProductForUpdate();

      expect(component.productUpdateForm.get('name').value).toEqual('test product');
      expect(component.productUpdateForm.get('price').value).toEqual(99);
    });
  });

  describe('updateProduct', () => {
    it('should show message and redirect to products route', () => {
      jest.spyOn(productService, 'updateProduct').mockImplementation(() => of({ name: 'test product', price: 99 }));
      jest.spyOn(productService, 'showMessage');
      jest.spyOn(router, 'navigate').mockImplementation();

      component.updateProduct();

      expect(productService.showMessage).toHaveBeenCalledWith('Produto atualizado com sucesso!');
      expect(router.navigate).toHaveBeenCalledWith(['/products']);
      expect(productService.updateProduct).toHaveBeenCalled();
    })
  })
});
