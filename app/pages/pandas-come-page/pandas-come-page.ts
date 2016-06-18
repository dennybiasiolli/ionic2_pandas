import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasGustiPage} from '../pandas-gusti-page/pandas-gusti-page';

@Component({
    templateUrl: 'build/pages/pandas-come-page/pandas-come-page.html'
})
export class PandasComePage {
    constructor(private _navController: NavController) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(){
      this._navController.push(PandasGustiPage)
    }
}
