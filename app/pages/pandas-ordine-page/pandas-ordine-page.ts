import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {PandasService} from '../../services';
import {Gusto, Salsa} from '../../models';

@Component({
    templateUrl: 'build/pages/pandas-ordine-page/pandas-ordine-page.html'
})
export class PandasOrdinePage {
    private nome: string = '';
    private ora: string = '';
    private taglia: string = '';
    private tipo: string = '';
    private dove: string = '';
    private come: string = '';
    private gusti: Gusto[];
    private salse: Salsa[]
    constructor(private _navController: NavController, private platform: Platform, private pandasService: PandasService) {
    }

    ionViewWillEnter() {
        this.pandasService.getNomeSelected().then(nome => this.nome = nome);
        this.pandasService.getOraSelected().then(ora => this.ora = ora);
        this.pandasService.getTagliaSelected().then(taglia => this.taglia = taglia);
        this.pandasService.getTipoSelected().then(tipo => this.tipo = tipo);
        this.pandasService.getDoveSelected().then(dove => this.dove = dove);
        this.pandasService.getComeSelected().then(come => this.come = come);
        this.pandasService.getGustiSelected().then(gusti => this.gusti = gusti);
        this.pandasService.getSalseSelected().then(salse => this.salse = salse);
    }

    getStrShareMsg() {
        let strMsg: string = '';
        strMsg += 'Ciao,\n';
        strMsg += 'Sono ' + this.nome + ' e vorrei prenotare un panino per le ' + this.ora + ':\n';
        strMsg += '- ' + this.taglia + ', ' + this.tipo + ', ' + this.come + '\n';
        strMsg += '- gusti:\n';
        this.gusti.forEach(
            (gusto: Gusto) => strMsg += ' -> ' + gusto.id.toString() + ' ' + gusto.nome + '\n'
        );
        strMsg += '\n';
        strMsg += '- salse:\n';
        this.salse.forEach(
            (salsa: Salsa) => strMsg += ' -> ' + salsa.id.toString() + ' ' + salsa.nome + '\n'
        );
        strMsg += '\n';
        strMsg += 'Grazie!';
        return strMsg;
    }

    whatsappShare() {
        this.platform.ready().then(() => {
            if(window.plugins.socialsharing) {
                window.plugins.socialsharing.canShareVia("whatsapp", null, null, null, null, function(result) {
                    window.plugins.socialsharing.shareViaWhatsApp(this.getStrShareMsg(), null, null, null);
                });
                window.plugins.socialsharing.share(this.getStrShareMsg(), null, null, null);
            }
        });
    }

    otherShare() {
        this.platform.ready().then(() => {
            if(window.plugins.socialsharing) {
                window.plugins.socialsharing.share(this.getStrShareMsg(), null, null, null);
            }
        });
    };
}
