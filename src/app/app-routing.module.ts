import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  },
  {
    path: ':slug',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
