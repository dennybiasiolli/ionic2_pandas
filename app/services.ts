import { Injectable } from '@angular/core';
import { Sezione, Gusto, Salsa } from './models';
import { SEZIONI } from './mocks/Sezioni';
import { GUSTI_SEZIONI } from './mocks/GustiSezioni';
import { SALSE } from './mocks/Salse';

@Injectable()
export class PandasService {
    private nome: string = '';
    private ora: string = '';
    private taglia: string = '';
    private tipo: string = '';
    private dove: string = '';
    private come: string = '';
    private gusti: Gusto[];
    private salse: Salsa[]

    getSezioni() {
        return Promise.resolve(SEZIONI);
    }
    getGustiSezioni() {
        // return Promise.resolve(GUSTI_SEZIONI);
        return new Promise<Sezione[]>(resolve =>
            setTimeout(() => resolve(GUSTI_SEZIONI), 50)
        );
    }
    getSalse() {
        // return Promise.resolve(GUSTI_SEZIONI);
        return new Promise<Salsa[]>(resolve =>
            setTimeout(() => resolve(SALSE), 50)
        );
    }

    setNome(nome: string) {
        this.nome = nome;
    }
    setOra(ora: string) {
        this.ora = ora;
    }
    setTaglia(taglia: string) {
        this.taglia = taglia;
    }
    setTipo(tipo: string) {
        this.tipo = tipo;
    }
    setDove(dove: string) {
        this.dove = dove;
    }
    setCome(come: string) {
        this.come = come;
    }
    setGusti(gusti: Gusto[]) {
        this.gusti = gusti;
    }
    setSalse(salse: Salsa[]) {
        this.salse = salse;
    }
    getNomeSelected() {
        let self = this;
        return new Promise<string>(resolve =>
            setTimeout(() => resolve(self.nome), 50)
        );
    }
    getOraSelected() {
        let self = this;
        return new Promise<string>(resolve =>
            setTimeout(() => resolve(self.ora), 50)
        );
    }
    getTagliaSelected() {
        let self = this;
        return new Promise<string>(resolve =>
            setTimeout(() => resolve(self.taglia), 50)
        );
    }
    getTipoSelected() {
        let self = this;
        return new Promise<string>(resolve =>
            setTimeout(() => resolve(self.tipo), 50)
        );
    }
    getDoveSelected() {
        let self = this;
        return new Promise<string>(resolve =>
            setTimeout(() => resolve(self.dove), 50)
        );
    }
    getComeSelected() {
        let self = this;
        return new Promise<string>(resolve =>
            setTimeout(() => resolve(self.come), 50)
        );
    }
    getGustiSelected() {
        let self = this;
        return new Promise<Gusto[]>(resolve =>
            setTimeout(() => resolve(self.gusti), 50)
        );
    }
    getSalseSelected() {
        let self = this;
        return new Promise<Salsa[]>(resolve =>
            setTimeout(() => resolve(self.salse), 50)
        );
    }
}
