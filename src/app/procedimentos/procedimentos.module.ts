import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcedimentosPage } from './procedimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcedimentosPage]
})
export class ProcedimentosPageModule {}
