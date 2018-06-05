import { RouterModule } from '@angular/router';
import { LazyLoadedOneEditComponent } from './edit';
import { LazyLoadedOneNewComponent } from './new';

export const LazyLoadedOneRouting = RouterModule.forChild([
  {
    path: 'edit',
    component: LazyLoadedOneEditComponent,
  },
  {
    path: 'new',
    component: LazyLoadedOneNewComponent,
  },
]);
