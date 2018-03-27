import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogOutPage } from './log-out';
import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    LogOutPage//,LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LogOutPage),
  ],
/*  entryComponents: [
    LoginPage
  ]*/
})
export class LogOutPageModule {}
