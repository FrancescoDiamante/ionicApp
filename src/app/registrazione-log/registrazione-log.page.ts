import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PrenotazioniService } from '../Services/prenotazioni.service';

@Component({
  selector: 'app-registrazione-log',
  templateUrl: './registrazione-log.page.html',
  styleUrls: ['./registrazione-log.page.scss'],
})
export class RegistrazioneLogPage implements OnInit {
  Reg1Form: FormGroup;
  nome:String 
  cognome:String 
  cellulare:String 
  cf :String;

  constructor(private form:FormBuilder, private router:Router, private navCtrl:NavController, private activatedRoute: ActivatedRoute, private service: PrenotazioniService) { 
    this.Reg1Form=form.group({
      'email':[null, Validators.compose([Validators.required])],
      'password':[null, Validators.compose([Validators.required])]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.nome=params.nome;
      this.cognome=params.cognome;
      this.cf=params.cf;
      this.cellulare=params.cellulare;
    });
  }

  ngOnInit() {

  }

  Registra(value:any){
    this.service.registraUtente(value.email, value.password, this.cf, this.nome, this.cognome, this.cellulare);
    this.navCtrl.navigateRoot('/home');
  }
}
