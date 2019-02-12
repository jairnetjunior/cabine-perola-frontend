import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';


@Component({
 
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(public menuCtrl: MenuController, 
    public navCtrl: NavController, 
    public auth: AuthService){
    this.menuCtrl.enable(false);
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(reponse => {
      console.log(reponse.headers.get('Authorization'));
      this.navCtrl.navigateRoot('procedimentos')
    },
    error =>{});
  }

}
