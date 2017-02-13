import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { Github } from '../github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  goToPage2() {
  this.navCtrl.push( Page2 );
  }

 goToGitHub() {
  this.navCtrl.push( Github );
  }

}
