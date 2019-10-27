import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrenotazioniPage } from './prenotazioni.page';

const routes: Routes = [
  {
    path: '',
    component: PrenotazioniPage
  },
  {
    path: '/prenotazioni',
    component: PrenotazioniPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrenotazioniPage]
})
export class PrenotazioniPageModule {}
