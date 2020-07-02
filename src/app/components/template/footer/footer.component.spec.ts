import { TestingModule } from './../../../../testing/testing.module';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let spectator: Spectator<FooterComponent>;

  const createComponent = createComponentFactory({
    component: FooterComponent,
    imports: [TestingModule],
    shallow: true,
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
