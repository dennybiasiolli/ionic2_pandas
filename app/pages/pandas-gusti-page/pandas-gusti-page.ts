import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasSalsePage} from '../pandas-salse-page/pandas-salse-page';
import {PandasService} from '../../services.ts';

@Component({
    templateUrl: 'build/pages/pandas-gusti-page/pandas-gusti-page.html'
})
export class PandasGustiPage {
    private gustiSezioni: Object[];
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
        this.pandasService.getGustiSezioni().then(gustiSezioni => this.gustiSezioni = gustiSezioni);
    }

    // selectGusto(gusto){
    //   this._navController.push(SelectedFactPage, {selectedGusto: gusto})
    // }

    goToNextPage() {
        this._navController.push(PandasSalsePage)
    }
}
