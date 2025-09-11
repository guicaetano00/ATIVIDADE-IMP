import Conta from "./conta.js";
class Poupanca extends Conta {
    taxaRendimento;
    constructor(titular, saldo, taxaRendimento) {
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }
    renderJuros() {
        const rendimento = this.getSaldo() * this.taxaRendimento;
        this.setSaldo(this.getSaldo() + rendimento);
    }
}
export default Poupanca;
//# sourceMappingURL=poupanca.js.map