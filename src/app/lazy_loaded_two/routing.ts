import { RouterModule } from '@angular/router';
import { LazyLoadedTwoEditComponent } from './edit';
import { LazyLoadedTwoNewComponent } from './new';

export const LazyLoadedTwoRouting = RouterModule.forChild([
  {
    path: 'edit',
    component: LazyLoadedTwoEditComponent,
  },
  {
    path: 'new',
    component: LazyLoadedTwoNewComponent,
  },
]);
