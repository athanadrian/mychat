import { Component } from '@angular/core';
import { Platform, NavController, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { Facebook } from 'ionic-native';

import { HomePage } from '../home/home';

import { DataService } from '../../providers/data-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;

  constructor(public navController: NavController,
    public alertController: AlertController,
    public platform: Platform,
    public menu: MenuController,
    public loadingController: LoadingController,
    public dataService: DataService) {

    // this.loading = this.loadingController.create({
    //   content: 'Authenticating....'
    // });
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  facebookLogin(): void {
    this.platform.ready().then(() => {
      //this.loading.present();
      Facebook.login(['public_profile']).then((response) => {
        this.getFacebookProfile();
      }, (err) => {
        let alert = this.alertController.create({
          title: 'Ooohhh',
          subTitle: 'Something went wrong, please try again later!' + err,
          buttons: ['OK']
        });
        //this.loading.dismiss();
        alert.present();
      });
    });
  }

  getFacebookProfile(): void {
    Facebook.api('/me?friends=id,name,picture', ['public_profile']).then((response) => {
      console.log('Res :', response);
      this.dataService.fbid = response.id;
      this.dataService.username = response.name;
      this.dataService.picture = response.picture.data.url;
      this.menu.enable(true);
      //this.loading.dismiss();
      this.navController.setRoot(HomePage);
    }, (err) => {
      console.log('Error :', err);
      let alert = this.alertController.create({
        title: 'Ooohhh',
        subTitle: 'Something went wrong, please try again later!',
        buttons: ['OK']
      });
      //this.loading.dismiss();
      alert.present();
    });
  }

}
