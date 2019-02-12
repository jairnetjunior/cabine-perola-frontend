import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
 
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{
  constructor(public menuCtrl: MenuController, public navCtrl: NavController){
    this.menuCtrl.enable(false);
  }

  login(){
   this.navCtrl.navigateRoot('home');
  }

}
