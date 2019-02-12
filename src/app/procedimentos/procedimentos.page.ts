import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ProcedimentoService } from 'src/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'src/models/procedimento.dto';

@Component({
  selector: 'procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss'],
})
export class ProcedimentosPage{

  items: ProcedimentoDTO[];

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public procedimentoService: ProcedimentoService){
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter(){
    this.procedimentoService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {
      console.log(error);
    });
  }
}
