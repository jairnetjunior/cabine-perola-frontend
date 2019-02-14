import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { AgendamentoService } from 'src/services/domain/agendamento.service';
import { AgendamentoDTO } from 'src/models/agendamento.dto';
import { EnderecoDTO } from 'src/models/endereco.dto';
import { EnderecoService } from 'src/services/domain/endereco.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  cliente: ClienteDTO;
  agendamentos: AgendamentoDTO[];
  enderecos: EnderecoDTO[];
  telefones: string[];

  constructor(navCtrl: NavController, 
    public storage: StorageService, 
    public clienteService: ClienteService,
    public agendamentoService: AgendamentoService,
    public enderecoService: EnderecoService) { }

    ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
      },
      error => {});
    }
  }

  listarAgendamento(){
    this.agendamentoService.findAllByCliente(this.cliente.id)
    .subscribe(response => {
      this.agendamentos = response;
      console.log(this.agendamentos);
    },
    error => {
      console.log(error);
    });
  }

  listarEnderecos(){
    this.enderecoService.findAllByCliente(this.cliente.id)
    .subscribe(response => {
      this.enderecos = response;
      console.log(this.enderecos);
    },
    error => {
      console.log(error);
    });
  }

  listarTelefones(){
    this.clienteService.findTelefones(this.cliente.id)
    .subscribe(response => {
      this.telefones = response;
    },
    error => {
      console.log(error);
    });
  }
}
