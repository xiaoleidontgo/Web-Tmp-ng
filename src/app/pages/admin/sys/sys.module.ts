import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SysRoutingModule } from './sys-routing.module';
import { SysComponent } from './sys.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    SysRoutingModule,
    NgZorroAntdModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [SysComponent]
})
export class SysModule { }
