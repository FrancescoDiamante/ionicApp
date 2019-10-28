import { Component, OnInit } from '@angular/core';
import { PrenotazioniService } from '../Services/prenotazioni.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.page.html',
  styleUrls: ['./prenotazioni.page.scss'],
})
export class PrenotazioniPage implements OnInit {
  RegForm:FormGroup;
  utente = localStorage.getItem("utente");   

  constructor(private service: PrenotazioniService, private form:FormBuilder) { 
    this.RegForm=form.group({
      'tipoProblema': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'note': [null, Validators.compose([Validators.required])],
      'data': [null],
      'OrarioScelta': [null]
    });
  }

  ngOnInit() {}

  effettuaPrenotazione(value:any){

    this.service.effettuaPrenotazione(value.data, value.tipoProblema, value.OrarioScelta, value.note, value.email);
    
  }
}
