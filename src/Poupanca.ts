import Conta from "./conta.js";

class Poupanca extends Conta {
    private taxaRendimento: number;

    constructor(
        _saldo: number,
        _titular: string,
        _taxaRendimento: number
    ) {
        super(_titular, _saldo);
        this.taxaRendimento = _taxaRendimento;
    }

    public getTaxaRendimento(): number {
        return this.taxaRendimento;
    }

    public setTaxaRendimento(_taxaRendimento: number): void {
        this.taxaRendimento = _taxaRendimento;
    }

    public renderJuros(): void {
        let saldo: number = this.recuperarSaldo();
        this.setSaldo(saldo + (saldo * this.taxaRendimento));
        console.log(`Jurous renderam ${this.recuperarSaldo()}.`)
    }
}

export default Poupanca;
