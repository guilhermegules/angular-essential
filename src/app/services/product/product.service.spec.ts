import { environment } from './../../../environments/environment';
import { Product } from './../../models/product.model';
import { HttpTestingController } from '@angular/common/http/testing';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

import { TestingModule } from './../../../testing/testing.module';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let spectator: SpectatorService<ProductService>;
  let httpMock: HttpTestingController;

  const createService = createServiceFactory({
    service: ProductService,
    imports: [TestingModule],
  });

  beforeEach(() => {
    spectator = createService();

    service = spectator.service;
    httpMock = spectator.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addProduct', () => {
    it('should call add method', () => {
      const model: Product = {
        id: 1,
        name: 'Test',
        price: 100,
      };

      service.addProduct(model).subscribe();

      const { request } = httpMock.expectOne(`${environment.apiUrl}/products`);

      expect(request.method).toEqual('POST');
    });
  });
});
