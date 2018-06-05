import { RouterModule } from '@angular/router';
import { LazyLoadedTwoStandardComponent } from './standard';
import { LazyLoadedTwoVariationComponent } from './variation';

export const LazyLoadedTwoRouting = RouterModule.forChild([
  {
    path: 'variation',
    component: LazyLoadedTwoVariationComponent,
  },
  {
    path: '',
    component: LazyLoadedTwoStandardComponent,
  },
]);
