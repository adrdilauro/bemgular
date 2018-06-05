import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'one',
        loadChildren: './lazy_loaded_one/module#LazyLoadedOneModule',
      },
      {
        path: '',
        loadChildren: './lazy_loaded_two/module#LazyLoadedTwoModule',
      },
    ])
  ],
})
export class AppRoutingModule {}
