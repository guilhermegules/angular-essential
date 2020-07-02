import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TestingModule } from './../../../../testing/testing.module';
import { ListProductComponent } from './list-product.component';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let spectator: Spectator<ListProductComponent>;

  const createComponent = createComponentFactory({
    component: ListProductComponent,
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
