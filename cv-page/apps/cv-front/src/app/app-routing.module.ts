import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {
      path: '',
      loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)
    }
   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
