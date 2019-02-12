import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
    constructor(public menuCtrl: MenuController, public navCtrl: NavController){
      this.menuCtrl.enable(true);
    }

    

}
