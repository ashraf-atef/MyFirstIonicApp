import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page2' ,
  templateUrl: 'page2.html'
})
export class Page2 {

  items: string[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.items = ['javaSe', 'Android', 'RestWS'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2');
  }

}
