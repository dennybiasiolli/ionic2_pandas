export class Sezione {
  id: number;
  nome: string;
  gusti: Gusto[];
}

export class Gusto {
    id: number;
    nome: string;
    selezionato: boolean;
}

export class Salsa {
    id: number;
    nome: string;
    selezionata: boolean;
}
