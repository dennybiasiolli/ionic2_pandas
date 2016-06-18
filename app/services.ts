import { Injectable } from '@angular/core';
import { Sezione, Gusto, Salsa } from './models';
import { SEZIONI } from './mocks/Sezioni';
import { GUSTI_SEZIONI } from './mocks/GustiSezioni';
import { SALSE } from './mocks/Salse';

@Injectable()
export class PandasService {
    private nome: string = '';
    private taglia: string = '';
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
    setTaglia(taglia: string) {
        this.taglia = taglia;
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
        console.log(this.nome);
        console.log(this.taglia);
        console.log(this.dove);
        console.log(this.come);
        console.log(this.gusti);
        console.log(this.salse);
    }
}
