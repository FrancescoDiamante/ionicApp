import { Component, OnInit, Input } from '@angular/core';
import { PrenotazioniService } from '../Services/prenotazioni.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  res:any;
  authForm:FormGroup;
  elenco:any;
  constructor(private componente: AppComponent, private alertController: AlertController, private service: PrenotazioniService, private router: Router, private form:FormBuilder, private navCtrl:NavController) {
    this.authForm=form.group({
      'email':[null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      'password':[null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]*')])]
    });
  }

  async CampiObbligatori() {
    const alert = await this.alertController.create({
      header: 'ATTENZIONE',
      subHeader: 'CAMPO RICHIESTO',
      message: 'CAMPI EMAIL E PASSWORD OBBLIGATORI',
      buttons: ['OK'],
      backdropDismiss: true
    });

    await alert.present();
  }

  async CampiErrati() {
    const alert = await this.alertController.create({
      header: 'ATTENZIONE',
      subHeader: 'CAMPO ERRATO',
      message: 'INSERIRE CAMPI VALIDI',
      buttons: ['OK'],
      backdropDismiss: true
    });

    await alert.present();
  }

  Search(value:any){
    this.service.searchCliente().subscribe((res)=>{
    console.log(1)
    var i=0;
      for(let test in res){
        if(i==0){
          if (value.email==null){
            this.CampiObbligatori();
          }else if(value.password==null){
            this.CampiObbligatori();
          }else if(res[test].email==value.email && res[test].password==value.password){
            var item=res[test].nome;
            console.log(2);
            localStorage.setItem("utente", item);
            localStorage.setItem("email", value.email);
            this.componente.modificaNome();
            this.navCtrl.navigateRoot('/home');
            i=-1;
          }
        }      
      }
      if(i!=-1)
        this.CampiErrati();

    });
  }
  

  ngOnInit() {
    localStorage.setItem("utente", null);
    localStorage.setItem("email", null);
    this.componente.modificaNome();
  }

}
