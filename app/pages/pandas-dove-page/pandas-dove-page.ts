import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasComePage} from '../pandas-come-page/pandas-come-page';
import {PandasService} from '../../services';

@Component({
    templateUrl: 'build/pages/pandas-dove-page/pandas-dove-page.html'
})
export class PandasDovePage {
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(dove: string) {
        this.pandasService.setDove(dove);
        this._navController.push(PandasComePage)
    }
}
