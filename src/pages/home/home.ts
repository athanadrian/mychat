import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from  '../providers/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chatMessage:string='';
  messages:any=[];

  constructor(public navCtrl: NavController) {
    
  }

  sendMessage():void{
    
  }

}
