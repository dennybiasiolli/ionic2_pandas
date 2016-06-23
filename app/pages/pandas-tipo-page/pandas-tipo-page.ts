import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasDovePage} from '../pandas-dove-page/pandas-dove-page';
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
        this._navController.push(PandasDovePage)
    }
}
