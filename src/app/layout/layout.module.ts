import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: [
  HeaderComponent,
  FooterComponent]
})
export class LayoutModule { }
