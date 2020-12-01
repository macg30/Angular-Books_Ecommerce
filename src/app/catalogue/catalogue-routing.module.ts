import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddModifyComponent } from './add-modify/add-modify.component';

import { CatalogueComponent } from './catalogue.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: CatalogueComponent 
  },
  { 
    path: 'add', 
    component: AddModifyComponent
  },
  { 
    path: 'modify/:isbn', 
    component: AddModifyComponent
  },
  { 
    path: 'detail/:isbn', 
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
