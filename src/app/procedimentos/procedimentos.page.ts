import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss'],
})
export class ProcedimentosPage{

  constructor(public menuCtrl: MenuController, public navCtrl: NavController){
    this.menuCtrl.enable(true);
  }
 

}
