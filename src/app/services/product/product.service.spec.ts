import { TestingModule } from './../../../testing/testing.module';
import { HttpTestingController } from '@angular/common/http/testing';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

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
});
