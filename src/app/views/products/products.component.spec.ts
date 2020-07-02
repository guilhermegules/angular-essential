import { ListProductComponent } from './list-product/list-product.component';
import { FormTestingModule } from './../../../testing/form-testing.module';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TestingModule } from './../../../testing/testing.module';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let spectator: Spectator<ProductsComponent>;

  const createComponent = createComponentFactory({
    component: ProductsComponent,
    imports: [TestingModule, FormTestingModule],
    declarations: [ListProductComponent],
    shallow: true
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
