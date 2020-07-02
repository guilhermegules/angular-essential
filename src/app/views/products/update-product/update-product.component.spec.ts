import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FormTestingModule } from './../../../../testing/form-testing.module';
import { ProductService } from './../../../services/product/product.service';
import { TestingModule } from './../../../../testing/testing.module';
import { UpdateProductComponent } from './update-product.component';

describe('UpdateProductComponent', () => {
  let component: UpdateProductComponent;
  let spectator: Spectator<UpdateProductComponent>;
  let productService: ProductService;

  const createComponent = createComponentFactory({
    component: UpdateProductComponent,
    imports: [TestingModule, FormTestingModule],
    shallow: true
  });

  beforeEach(async () => {
    spectator = createComponent();
    component = spectator.component;

    productService = spectator.inject(ProductService);

    spectator.detectChanges();
    await spectator.fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
