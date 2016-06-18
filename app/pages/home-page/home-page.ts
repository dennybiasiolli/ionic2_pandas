import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasNomePage} from '../pandas-nome-page/pandas-nome-page';
import {PandasGustiPage} from '../pandas-gusti-page/pandas-gusti-page';

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
