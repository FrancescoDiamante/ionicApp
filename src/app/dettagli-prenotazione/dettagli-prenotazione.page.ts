import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PrenotazioniService } from '../Services/prenotazioni.service';

@Component({
  selector: 'app-dettagli-prenotazione',
  templateUrl: './dettagli-prenotazione.page.html',
  styleUrls: ['./dettagli-prenotazione.page.scss'],
})
export class DettagliPrenotazionePage implements OnInit {
  id:number;
  pre:any;
  constructor(private service: PrenotazioniService, private platform: Platform) { 
    this.id=Number.parseInt(this.platform.getQueryParam('idPrenotazione'));
    this.pre=JSON.parse(this.service.searchPrenotazioneById(this.id));
    var data=new Date(this.pre.dataPrenotazione).getDate().toString();
    data=data + '/' + (new Date(this.pre.dataPrenotazione).getMonth()+1).toString();
    data=data + '/' + new Date(this.pre.dataPrenotazione).getFullYear().toString();
    this.pre.dataPrenotazione=data;
  }

  ngOnInit() {
  }

  annulla(){
    console.log("qwertyui");
    this.service.annullaPrenotazione(this.id);
  }
}
