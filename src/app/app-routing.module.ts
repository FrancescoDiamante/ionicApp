import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'prenotazioni', 
    loadChildren: './prenotazioni/prenotazioni.module#PrenotazioniPageModule' 
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registrazione', loadChildren: './registrazione/registrazione.module#RegistrazionePageModule' },
  { path: 'registrazione-log', loadChildren: './registrazione-log/registrazione-log.module#RegistrazioneLogPageModule' },
  { path: 'dettagli-prenotazione', loadChildren: './dettagli-prenotazione/dettagli-prenotazione.module#DettagliPrenotazionePageModule' },
  { path: 'chi-siamo', loadChildren: './chi-siamo/chi-siamo.module#ChiSiamoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
