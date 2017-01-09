import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar, Facebook } from 'ionic-native';

import { HomePage, LoginPage, AboutPage } from '../pages/pages';
import { DataService } from '../providers/data-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  homePage: any = HomePage;
  AboutPage: any = AboutPage;

  constructor(public platform: Platform, public dataService: DataService, public menu: MenuController) {
    platform.ready().then(() => {

    });
  }

  openPage(page): void {

  }

  logout(): void {
    this.menu.close();
    this.menu.enable(false);

    this.nav.setRoot(LoginPage);
    this.dataService.fbid = null;
    this.dataService.username = null;
    this.dataService.picture = null;

    Facebook.logout();
  }
}
