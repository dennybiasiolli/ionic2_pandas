import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Sezione, Gusto } from '../../models';

@Component({
  templateUrl: 'build/pages/selected-fact-page/selected-fact-page.html'
})
export class SelectedFactPage {

  private gusto:Gusto;
  
  constructor(private _navController: NavController, private _navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.gusto = this._navParams.data.selectedGusto;
  }

  goBack(){
    this._navController.pop();
  }
}
