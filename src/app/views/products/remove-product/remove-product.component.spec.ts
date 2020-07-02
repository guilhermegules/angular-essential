import { Router, ActivatedRoute } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ProductService } from './../../../services/product/product.service';
import { FormTestingModule } from './../../../../testing/form-testing.module';
import { TestingModule } from './../../../../testing/testing.module';
import { RemoveProductComponent } from './remove-product.component';

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
});
