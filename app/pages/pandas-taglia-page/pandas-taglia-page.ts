import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasDovePage} from '../pandas-dove-page/pandas-dove-page';
import {PandasService} from '../../services';

@Component({
    templateUrl: 'build/pages/pandas-taglia-page/pandas-taglia-page.html'
})
export class PandasTagliaPage {
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(taglia:string) {
        this.pandasService.setTaglia(taglia);
        this._navController.push(PandasDovePage)
    }
}
