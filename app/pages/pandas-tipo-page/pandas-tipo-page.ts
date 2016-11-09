import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasComePage} from '../pandas-come-page/pandas-come-page';
import {PandasService} from '../../services';

@Component({
    templateUrl: 'build/pages/pandas-tipo-page/pandas-tipo-page.html'
})
export class PandasTipoPage {
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(tipo: string) {
        this.pandasService.setTipo(tipo);
        this._navController.push(PandasComePage)
    }
}
