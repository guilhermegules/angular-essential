import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TestingModule } from './../testing/testing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [TestingModule],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-essential'`, () => {
    expect(component.title).toEqual('angular-essential');
  });
});
