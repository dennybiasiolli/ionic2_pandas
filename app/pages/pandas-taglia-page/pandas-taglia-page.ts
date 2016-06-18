import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasDovePage} from '../pandas-dove-page/pandas-dove-page';

@Component({
    templateUrl: 'build/pages/pandas-taglia-page/pandas-taglia-page.html'
})
export class PandasTagliaPage {
    constructor(private _navController: NavController) {
    }

    ionViewWillEnter() {
    }

    goToNextPage() {
        this._navController.push(PandasDovePage)
    }
}
