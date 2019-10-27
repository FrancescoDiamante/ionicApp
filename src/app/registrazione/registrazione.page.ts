import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
  RegForm:FormGroup;

  constructor(private form:FormBuilder, private router: Router, private navCtrl:NavController ) { 
    this.RegForm=form.group({
      'cf':[null, Validators.compose([Validators.required])],
      'nome': [null, Validators.compose([Validators.required])],
      'cognome': [null, Validators.compose([Validators.required])],
      'cellulare': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  Registra(value:any){

    this.router.navigate(['/registrazione-log'], {queryParams:value});
  }
}
