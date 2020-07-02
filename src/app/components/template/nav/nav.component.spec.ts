import { TestingModule } from './../../../../testing/testing.module';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let spectator: Spectator<NavComponent>;

  const createComponent = createComponentFactory({
    component: NavComponent,
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
