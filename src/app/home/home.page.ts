import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  constructor(private componente: AppComponent, private router: Router, public navCtrl: NavController, private activatedRoute : ActivatedRoute) {}


  Prenota(){
    this.router.navigateByUrl('/prenotazioni');
  }

  Lista(){
    this.router.navigateByUrl('/list');
  }

}
