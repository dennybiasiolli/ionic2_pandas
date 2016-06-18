import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PandasTagliaPage} from '../pandas-taglia-page/pandas-taglia-page';
import {PandasService} from '../../services';

@Component({
    templateUrl: 'build/pages/pandas-nome-page/pandas-nome-page.html'
})
export class PandasNomePage {
    private nome: string;
    constructor(private _navController: NavController, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
    }

    goToNextPage(){
        this.pandasService.setNome(this.nome);
      this._navController.push(PandasTagliaPage)
    }
}
