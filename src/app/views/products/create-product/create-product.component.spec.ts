import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FormTestingModule } from './../../../../testing/form-testing.module';
import { ProductService } from './../../../services/product/product.service';
import { TestingModule } from './../../../../testing/testing.module';
import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let spectator: Spectator<CreateProductComponent>;
  let productService: ProductService;

  const createComponent = createComponentFactory({
    component: CreateProductComponent,
    imports: [TestingModule, FormTestingModule],
    shallow: true
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;

    productService = spectator.inject(ProductService);

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
