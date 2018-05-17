import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'forefront', pathMatch: 'full' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule' },
  { path: 'forefront', loadChildren: './pages/forefront/forefront.module#ForefrontModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
