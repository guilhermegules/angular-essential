import { TestingModule } from './../../../testing/testing.module';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HomeComponent } from './home.component';

describe('Home2Component', () => {
  let component: HomeComponent;
  let spectator: Spectator<HomeComponent>;

  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [TestingModule],
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
