import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasNomePage} from '../pandas-nome-page/pandas-nome-page';

@Component({
    templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
    constructor(private _navController: NavController) {
    }

    goToOrdinePandas() {
        this._navController.push(PandasNomePage);
    }
}
