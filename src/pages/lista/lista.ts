import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  goBack() {
    this.navCtrl.pop();
}

}
