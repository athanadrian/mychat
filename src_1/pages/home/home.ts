import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from  '../../providers/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chatMessage:string='';
  messages:any=[];

  constructor(public navCtrl: NavController, public dataService:DataService) {
    
  }

  sendMessage():void{
    let message={
      '_id':new Date().toJSON(),
      'fbid':this.dataService.fbid,
      'username':this.dataService.username,
      'picture':this.dataService.picture,
      'message':this.chatMessage
    };
    this.messages.push(message);
    this.chatMessage='';
  }

}
