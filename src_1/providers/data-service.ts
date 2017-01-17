import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  fbid: number;
  username: string;
  picture: string;

  constructor(public http: Http) {
    console.log('Hello DataService Provider');
  }

}
