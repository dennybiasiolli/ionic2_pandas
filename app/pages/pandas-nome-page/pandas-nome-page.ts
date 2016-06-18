import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasTagliaPage} from '../pandas-taglia-page/pandas-taglia-page';

@Component({
    templateUrl: 'build/pages/pandas-nome-page/pandas-nome-page.html'
})
export class PandasNomePage {
    constructor(private _navController: NavController) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(){
      this._navController.push(PandasTagliaPage)
    }
}
