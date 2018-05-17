import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForefrontRoutingModule } from './forefront-routing.module';
import { ForefrontComponent } from './forefront.component';
import { ItemComponent } from '../../components/item/item.component';
import { TagComponent } from '../../components/tag/tag.component';

@NgModule({
  imports: [
    CommonModule,
    ForefrontRoutingModule
  ],
  declarations: [ForefrontComponent, ItemComponent, TagComponent]
})
export class ForefrontModule { }
