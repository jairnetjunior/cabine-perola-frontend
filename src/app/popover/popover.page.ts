import { Component } from '@angular/core';
import { PopoverController, AlertController, NavController } from '@ionic/angular';
import { ClienteService } from 'src/services/domain/cliente.service';
import { AuthService } from 'src/services/auth.service';
import { EmailDTO } from 'src/models/email.dto';


@Component({
  selector: 'popover.page',
  templateUrl: 'popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage {

  email: string = "";
  emailExiste: string = '';
  
  emailDto: EmailDTO = {
    email: ""
  };

  constructor(public alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    public clienteService: ClienteService,
    public auth: AuthService,
    public navCtrl: NavController) {}

  esqueci(){
    if(this.email != "")
      this.verificarEmail();
    else
      this.erroEmailDigitado()//campo vazio    
  }

  verificarEmail(){
    this.emailDto = null;
    this.clienteService.emailExiste(this.email)
    .subscribe(response => {
      this.emailDto = response;
        if(this.emailDto.email == this.email)
          this.enviarEmail();//email existe (campo = email do bd)          
      },
      error => {
        this.erroEmailDigitado()//email digitado não existe no bd
      }
    );
  }

  enviarEmail(){
    this.auth.forgot(this.emailDto)
        .subscribe(
          () => {
                this.msgEmailEnviado();
                },
          () => {}
        );
  }

  async erroEmailDigitado(){
    let alert = await this.alertCtrl.create({
      header: 'Erro!',
      message: 'Verifique o email digitado!',
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    alert.present();
  }

  async msgEmailEnviado(){
    let alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: 'Email com nova senha enviado!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.popoverCtrl.dismiss();
          }
        }
      ]
    });
    alert.present();
  }
}