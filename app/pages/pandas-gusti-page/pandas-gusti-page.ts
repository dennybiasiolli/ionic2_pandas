import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasSalsePage} from '../pandas-salse-page/pandas-salse-page';
import {PandasService} from '../../services';
import {Sezione, Gusto} from '../../models';

@Component({
    templateUrl: 'build/pages/pandas-gusti-page/pandas-gusti-page.html'
})
export class PandasGustiPage {
    private gustiSezioni: Sezione[];
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
        this.pandasService.getGustiSezioni().then(gustiSezioni => this.gustiSezioni = gustiSezioni);
    }

    // selectGusto(gusto){
    //   this._navController.push(SelectedFactPage, {selectedGusto: gusto})
    // }

    private getGusti(gusti: Gusto[], left: boolean) {
        return gusti;
        // if (left) {
        //     return gusti.slice(0, Math.floor(gusti.length / 2) + 1);
        // } else {
        //     console.log(gusti.slice(Math.floor(gusti.length / 2)));
        //     return gusti.slice(Math.floor(gusti.length / 2));
        // }
    }

    goToNextPage() {
        let gustiSelezionati: Gusto[];
        gustiSelezionati = [].concat.apply([], this.gustiSezioni.map(
            (sezione: Sezione) => sezione.gusti.filter(
                (gusto: Gusto) => gusto.selezionato)));
        this.pandasService.setGusti(gustiSelezionati);
        this._navController.push(PandasSalsePage);
    }
}
