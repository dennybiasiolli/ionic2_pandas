import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasService} from '../../services.ts';

@Component({
    templateUrl: 'build/pages/pandas-salse-page/pandas-salse-page.html'
})
export class PandasSalsePage {
    private salse: Object[];
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
        this.pandasService.getSalse().then(salse => this.salse = salse);
    }

    goToNextPage() {
        //     this._navController.push(SelectedFactPage, { selectedGusto: gusto })
    }
}
