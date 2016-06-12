import { Injectable } from '@angular/core';
import { Sezioni, Gusti } from './models';
import { SEZIONI } from './mocks/Sezioni';
import { GUSTI_SEZIONI } from './mocks/GustiSezioni';

@Injectable()
export class PandasService {
    getSezioni() {
        return Promise.resolve(SEZIONI);
    }
    getGustiSezioni() {
        // return Promise.resolve(GUSTI_SEZIONI);
        return new Promise<Sezioni[]>(resolve =>
          setTimeout(()=>resolve(GUSTI_SEZIONI), 500)
        );
    }    
}
