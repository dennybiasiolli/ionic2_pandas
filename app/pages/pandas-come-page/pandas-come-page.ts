import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasGustiPage} from '../pandas-gusti-page/pandas-gusti-page';
import {PandasService} from '../../services';

@Component({
    templateUrl: 'build/pages/pandas-come-page/pandas-come-page.html'
})
export class PandasComePage {
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(come: string) {
        this.pandasService.setCome(come);
        this._navController.push(PandasGustiPage)
    }
}
