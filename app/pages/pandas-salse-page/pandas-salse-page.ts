import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasOrdinePage} from '../pandas-ordine-page/pandas-ordine-page';
import {PandasService} from '../../services.ts';
import {Salsa} from '../../models'

@Component({
    templateUrl: 'build/pages/pandas-salse-page/pandas-salse-page.html'
})
export class PandasSalsePage {
    private salse: Salsa[];
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
        this.pandasService.getSalse().then(salse => this.salse = salse);
    }

    goToNextPage() {
        let salseSelezionate: Salsa[];
        salseSelezionate = this.salse.filter(
            (salsa: Salsa) => salsa.selezionata);
        this.pandasService.setSalse(salseSelezionate);
        this._navController.push(PandasOrdinePage);
    }
}
