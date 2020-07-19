import { Router, ActivatedRoute } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ProductService } from './../../../services/product/product.service';
import { FormTestingModule } from './../../../../testing/form-testing.module';
import { TestingModule } from './../../../../testing/testing.module';
import { RemoveProductComponent } from './remove-product.component';
import { of } from 'rxjs';
import { Product } from 'src/app/models/product.model';

describe('RemoveProductComponent', () => {
  let component: RemoveProductComponent;
  let spectator: Spectator<RemoveProductComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let productService: ProductService;

  const createComponent = createComponentFactory({
    component: RemoveProductComponent,
    imports: [TestingModule, FormTestingModule],
    shallow: true
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;

    productService = spectator.inject(ProductService);
    router = spectator.inject(Router);
    route = spectator.inject(ActivatedRoute);

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {
    it('should init form with disabled fields', () => {
      component.initForm();

      expect(component.removalProductForm.get('name').disabled).toBeTruthy();
      expect(component.removalProductForm.get('price').disabled).toBeTruthy();
    })
  });

  describe('Cancel', () => {
    it('should redirect to products route', () => {
      jest.spyOn(router, 'navigate').mockImplementation();

      component.cancel();

      expect(router.navigate).toHaveBeenCalledWith(['/products']);
    })
  });

  describe('getProductForDelete', () => {
    it('should get one product from service', () => {
      jest.spyOn(productService, 'getProductById').mockImplementation(() => of({name: 'test', price: 30}));

      component.getProductForDelete();

      expect(productService.getProductById).toHaveBeenCalled();
      expect(component.removalProductForm.get('name').value).toEqual('test');
      expect(component.removalProductForm.get('price').value).toEqual(30);
    })
  });

  describe('removeProduct', () => {
    it('should delete one product, show a message and redirect to products route', () => {
      jest.spyOn(productService, 'removeProduct').mockImplementation(() => of({id: 1, name: 'test', price: 30}));
      jest.spyOn(productService, 'showMessage').mockImplementation();
      jest.spyOn(router, 'navigate').mockImplementation();

      component.removeProduct(1);

      expect(productService.showMessage).toHaveBeenCalledWith('Produto deletado com sucesso!');
      expect(router.navigate).toHaveBeenCalledWith(['/products']);
      expect(productService.removeProduct).toHaveBeenCalledWith('1');
    })
  })
});
