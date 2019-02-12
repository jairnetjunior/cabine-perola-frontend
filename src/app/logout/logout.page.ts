import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public auth: AuthService,
    public nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.auth.logOut();
    this.nav.navigateRoot('login');
  }

}
