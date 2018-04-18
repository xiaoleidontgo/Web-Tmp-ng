import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForefrontRoutingModule } from './forefront-routing.module';
import { ForefrontComponent } from './forefront.component';

@NgModule({
  imports: [
    CommonModule,
    ForefrontRoutingModule
  ],
  declarations: [ForefrontComponent]
})
export class ForefrontModule { }
