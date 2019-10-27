import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChiSiamoPage } from './chi-siamo.page';

const routes: Routes = [
  {
    path: '',
    component: ChiSiamoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChiSiamoPage]
})
export class ChiSiamoPageModule {}
