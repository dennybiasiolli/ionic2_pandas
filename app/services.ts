import { Injectable } from '@angular/core';
import { Sezione, Gusto } from './models';
import { SEZIONI } from './mocks/Sezioni';
import { GUSTI_SEZIONI } from './mocks/GustiSezioni';
import { SALSE } from './mocks/Salse';

@Injectable()
export class PandasService {
    getSezioni() {
        return Promise.resolve(SEZIONI);
    }
    getGustiSezioni() {
        // return Promise.resolve(GUSTI_SEZIONI);
        return new Promise<Sezione[]>(resolve =>
          setTimeout(()=>resolve(GUSTI_SEZIONI), 50)
        );
    }    
    getSalse() {
        // return Promise.resolve(GUSTI_SEZIONI);
        return new Promise<Sezione[]>(resolve =>
          setTimeout(()=>resolve(SALSE), 50)
        );
    }    
}
