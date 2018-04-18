import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForefrontComponent } from './forefront.component';

const routes: Routes = [
  {
    path: '',
    component: ForefrontComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForefrontRoutingModule { }
