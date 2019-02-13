import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { EmailDTO } from 'src/models/email.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { ClienteDTO } from 'src/models/cliente.dto';


@Component({
 
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  email: EmailDTO = {
    email: ""
  };

  cliente: ClienteDTO= {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: ""
  };

  constructor(public menuCtrl: MenuController, 
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public auth: AuthService,
    public clienteService: ClienteService){
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

  async esqueci(){
    if(this.creds.email != ""){
      this.clienteService.findByEmail(this.creds.email)
      .subscribe(response => {
        this.cliente = response;
      },
      error => {}
      );

      if(this.cliente.email != ""){
        this.auth.forgot(this.email);
        let alert = await this.alertCtrl.create({
          header: 'Sucesso!',
          message: 'Email com nova senha enviado!',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.navCtrl.navigateBack('login');
              }
            }
          ]
        });
        alert.present();
      }
    }
    
  }

}
