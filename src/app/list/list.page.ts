import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { PrenotazioniService } from '../Services/prenotazioni.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: Array<{ url:String; motivo: string; dataPrenotazione: String; ora: String; idPrenotazione: number; }> = [];
  constructor(private service: PrenotazioniService, private router:Router) {
    this.service.searchPrenotazioni(localStorage.getItem("email")).subscribe((res)=>{
      var i=1;
      var data:String;
      this.items.push({
        idPrenotazione: -1,
        url: '/dettagli-prenotazione',
        motivo: 'MOTIVO',
        dataPrenotazione: 'DATA',
        ora: 'ORA'
      });
      for(let test in res){
        data=new Date(res[test].dataPrenotazione).getDate().toString();
        data=data + '/' + (new Date(res[test].dataPrenotazione).getMonth()+1).toString();
        data=data + '/' + new Date(res[test].dataPrenotazione).getFullYear().toString();

        this.items.push({
          idPrenotazione: res[test].id,
          url: '/dettagli-prenotazione',
          motivo: res[test].tipoProblema,
          dataPrenotazione: data,
          ora: res[test].orarioScelta
        });
        i++;
      }
    });
  }

  ngOnInit() {
    const searchbar = document.querySelector('ion-searchbar');
    const items = Array.from(document.querySelectorAll('ion-list'));
    
    searchbar.addEventListener('ionInput', handleInput)
    function handleInput(event) {
      const query = event.target.value.toLowerCase();
      var i=0;
      requestAnimationFrame(() => {
        items.forEach(item => {
            if(i!=0){
              var j=0;
              var iter=Array.from(item.children);
              iter.forEach(item => {
                if(j!=0){
                  console.log("ciao" + item.textContent);
                  const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                  if(shouldShow){
                    item.setAttribute('style', 'display:block;--background:transparent;--ion-color-base: transparent !important; width: 100%;');
                  }
                  else{
                    item.setAttribute('style', 'display:none');
                  }
                }
                j++;
              });
            }
          i++;
        });
      });
    }
  }

}
