import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddModifyComponent } from './add-modify/add-modify.component';
import { DetailComponent } from './detail/detail.component';
import { ExRatePipe } from './ex-rate.pipe';



@NgModule({
  declarations: [CatalogueComponent, AddModifyComponent, DetailComponent, ExRatePipe],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
  ]
})
export class CatalogueModule { }
