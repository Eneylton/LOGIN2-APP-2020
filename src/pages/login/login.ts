import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string;
  senha:string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private serve: ServiceProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  formLogin(){
   
    let body = {
      usuario: this.usuario,
      senha:this.senha,
      crud: 'login'
    }

    this.serve.postData(body, 'servidor.php').subscribe(data => {

      for (let i=0; i < data.result.length; i++) {

        console.log(data.result[i]["usuario"]);
    
       }

    });

  }

}
