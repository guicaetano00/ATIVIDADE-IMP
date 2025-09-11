import Conta from './conta.js';
class Corrente extends Conta {
    taxaManutencao;
    constructor(titular, saldo, taxaManutencao) {
        super(titular, saldo);
        this.taxaManutencao = taxaManutencao;
    }
    cobrarTaxa() {
        const rendimento = this.getSaldo() * this.taxaManutencao;
        this.setSaldo(this.getSaldo() - rendimento);
    }
}
export default Corrente;
//# sourceMappingURL=corrente.js.map