import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
