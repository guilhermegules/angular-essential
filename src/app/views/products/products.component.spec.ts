import { HeaderService } from './../../services/header/header.service';
import { ListProductComponent } from './list-product/list-product.component';
import { FormTestingModule } from './../../../testing/form-testing.module';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TestingModule } from './../../../testing/testing.module';
import { ProductsComponent } from './products.component';
import { Router } from '@angular/router';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let spectator: Spectator<ProductsComponent>;
  let router: Router;
  let headerService: HeaderService;

  const createComponent = createComponentFactory({
    component: ProductsComponent,
    imports: [TestingModule, FormTestingModule],
    declarations: [ListProductComponent],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;

    router = spectator.inject(Router);
    headerService = spectator.inject(HeaderService);

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call initHeaderService', () => {
      jest.spyOn(component, 'initHeaderService').mockImplementation();

      component.ngOnInit();

      expect(component.initHeaderService).toHaveBeenCalled();
    });
  });

  describe('navigateToProductCreate', () => {
    it('should redirect to products create route', () => {
      jest.spyOn(router, 'navigate').mockImplementation();

      component.navigateToProductCreate();

      expect(router.navigate).toHaveBeenCalledWith(['/products/create']);
    });
  });
});
