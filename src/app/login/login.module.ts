import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { PopoverPage } from '../popover/popover.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      },
      {
        path: '/popover/popover.page',
        component: PopoverPage
      }
    ])
  ],
  declarations: [LoginPage, PopoverPage]
})
export class LoginPageModule {}
