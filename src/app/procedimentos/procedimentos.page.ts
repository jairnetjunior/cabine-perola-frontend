import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProcedimentoService } from 'src/services/domain/procedimento.service';
import { ProcedimentoDTO } from 'src/models/procedimento.dto';
import { AgendamentoService } from 'src/services/domain/agendamento.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { ClienteDTO } from 'src/models/cliente.dto';
import { StorageService } from 'src/services/storage.service';
import { AgendamentoDTO } from 'src/models/agendamento.dto';

@Component({
  selector: 'procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss'],
})
export class ProcedimentosPage{

  procedimentos: ProcedimentoDTO[];
  agendamentos: AgendamentoDTO[];
  cliente: ClienteDTO;

  constructor(
    public menuCtrl: MenuController,
    public procedimentoService: ProcedimentoService,
    public agendamentoService: AgendamentoService,
    public clienteService: ClienteService,
    public storage: StorageService){
      this.menuCtrl.enable(true);
  }

  ionViewWillEnter(){
    this.procedimentoService.findAll()
    .subscribe(response => {
      this.procedimentos = response;
    },
    error => {
      console.log(error);
    });
  }

  ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
      },
      error => {
        console.log(error);
      });
    }
  }
    
  reservar(){    
  
    this.agendamentoService.findAllByCliente(this.cliente.id)
    .subscribe(response => {
      this.agendamentos = response;
      console.log(this.agendamentos);
    },
    error => {
      console.log(error);
    });
    
  }

}
