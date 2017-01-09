import { Component } from '@angular/core';
import { Platform, NavController, MenuController, AlertController } from 'ionic-angular';
import { Facebook } from 'ionic-native';

import { HomePage } from '../home/home';

import { DataService } from '../../providers/data-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  userData;

  constructor(public navController: NavController,
              public alertController:AlertController,
              public platform:Platform,
              public menu:MenuController,
              public dataService:DataService) {
                this.menu.enable(false);
              }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  facebookLogin():void{
    this.getFacebookProfile();
  }

  getFacebookProfile():void{
    this.menu.enable(true);
    this.navController.setRoot(HomePage);
  }

}
