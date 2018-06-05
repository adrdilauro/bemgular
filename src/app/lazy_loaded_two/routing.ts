import { RouterModule } from '@angular/router';
import { LazyLoadedTwoStandardComponent } from './standard';
import { LazyLoadedTwoVariationComponent } from './variation';

export const LazyLoadedTwoRouting = RouterModule.forChild([
  {
    path: 'standard',
    component: LazyLoadedTwoStandardComponent,
  },
  {
    path: 'variation',
    component: LazyLoadedTwoVariationComponent,
  },
]);
