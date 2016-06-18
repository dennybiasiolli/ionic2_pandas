import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasComePage} from '../pandas-come-page/pandas-come-page';

@Component({
    templateUrl: 'build/pages/pandas-dove-page/pandas-dove-page.html'
})
export class PandasDovePage {
    constructor(private _navController: NavController) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(){
      this._navController.push(PandasComePage)
    }
}
