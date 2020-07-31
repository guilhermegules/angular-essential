import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

import { TestingModule } from './../../../testing/testing.module';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;
  let spectator: SpectatorService<HeaderService>;

  const createService = createServiceFactory({
    service: HeaderService,
    imports: [TestingModule],
  });

  beforeEach(() => {
    spectator = createService();

    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
