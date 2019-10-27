import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DettagliPrenotazionePage } from './dettagli-prenotazione.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliPrenotazionePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettagliPrenotazionePage]
})
export class DettagliPrenotazionePageModule {}
