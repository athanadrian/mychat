import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, LoginPage, AboutPage } from '../pages/pages';
import { DataService } from '../providers/data-service';
import { Facebook } from 'ionic-native';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, DataService, Facebook]
})
export class AppModule { }
