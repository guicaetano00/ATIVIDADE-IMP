import Conta from './conta.js';
declare class Corrente extends Conta {
    private taxaManutencao;
    constructor(titular: string, saldo: number, taxaManutencao: number);
    cobrarTaxa(): void;
}
export default Corrente;
//# sourceMappingURL=corrente.d.ts.map