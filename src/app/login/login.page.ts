import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, PopoverController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { PopoverPage } from '../popover/popover.page';


@Component({
 
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public menuCtrl: MenuController, 
    public navCtrl: NavController, 
    public auth: AuthService,    
    public popoverCtrl: PopoverController){
      this.menuCtrl.enable(false);
  }

  ionViewDidEnter(){
    this.auth.refreshToken()
    .subscribe(reponse => {
     this.auth.successfullLogin(reponse.headers.get('Authorization'));
     this.navCtrl.navigateRoot('home')
    },
    error =>{});
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(reponse => {
     this.auth.successfullLogin(reponse.headers.get('Authorization'));
     this.navCtrl.navigateRoot('home')
    },
    error =>{});
  }

  signup(){
    this.navCtrl.navigateForward('signup');
  }

  async presentPopover(event: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: event,
      translucent: true,
      cssClass: 'custom-popover'
    });
    return await popover.present();
  }

}
