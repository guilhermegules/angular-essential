import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TestingModule } from './../../../../testing/testing.module';
import { ListProductComponent } from './list-product.component';
import { ProductService } from 'src/app/services/product/product.service';
import { of } from 'rxjs';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let spectator: Spectator<ListProductComponent>;
  let productService: ProductService;

  const createComponent = createComponentFactory({
    component: ListProductComponent,
    imports: [TestingModule],
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

  describe('ngOnInit', () => {
    it('should init and call method for populate fields', () => {
      jest.spyOn(productService, 'getProducts').mockImplementation(() => of([{ name: 'product test 1', price: 10 }, { name: 'product test 2', price: 20 }]));

      component.ngOnInit();

      expect(component.products.length).toEqual(2);
    });
  });
});
