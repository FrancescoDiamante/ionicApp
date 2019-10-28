import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  ret:any;
  res:any;
  
  url= 'http://192.168.1.7:8080/';


  constructor(private http: HttpClient) { }

  searchPrenotazioni(email:String) :Observable<any>{
    return this.http.get(this.url + 'prenotazioneWeb/utente?email=' + email);
  }

  searchPrenotazioneById(id:number){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", this.url + 'prenotazioneWeb/prenotazione?id=' + id, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  searchCliente():Observable<any>{
    return this.http.get(this.url + 'clienti/');
  }

  searchDentisti():Observable<any>{
    return this.http.get(this.url + 'dentisti/');
  }

  registraUtente(email:String, password:String, cf:String,nome: String, cognome: String, cellulare:String){

    let DatiPost={
      email: email,
      password: password,
      cf: cf,
      nome: nome,
      cognome: cognome,
      tel: cellulare,
      numeroPrenotazioni: 0
    }
    var url=this.url + 'clienti/registra/';
    this.http.post(url, DatiPost).subscribe(response => {});
  }

  effettuaPrenotazione(dataPrenotazione: Date, tipoProblema: String, orarioScelta: String, note: String, email: String ){
    console.log('io' + localStorage.getItem('email'));


    var dentista={
      cf: '2',
      cognome: 'Soldo',
      nome: 'Simone',
      email: 'Simone@hotmail.it',
      password: '4Ottobre',
      tel: '3332221100'
    };
  
    this.searchClienteByEmail(localStorage.getItem('email')).subscribe((res)=>{
      var cliente=res;
      let DatiPost={
        dataPrenotazione: dataPrenotazione,
        tipoProblema: tipoProblema,
        orarioScelta: orarioScelta,
        note: note,
        email: email,
        dentistaAssociato: dentista,
        clientePrenotato: cliente
      }
      var url=this.url + 'prenotazioneWeb/registra/';
      this.http.post(url, DatiPost).subscribe(response => {});
    });
  }

  searchClienteByEmail(email: string) {
    console.log('tu' + email);
    var url=this.url + 'clienti/trovaPerMail?email=' + email;
    return this.http.get(url);
  }

  annullaPrenotazione(id: Number){
    let data={id:id};
    console.log(data);
    var da=new HttpHeaders();
    return this.http.post(this.url + '/prenotazioneWeb/AnnullaPrenotazione', data).subscribe();
  }
}
