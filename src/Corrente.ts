import Conta from "./conta.js";

class Corrente extends Conta {
    private taxaManutencao: number;

    constructor(
        _saldo: number,
        _titular: string,
        _taxaManutencao: number
    ) {
        super(_titular, _saldo);
        this.taxaManutencao = _taxaManutencao;
    }

    public getTaxaManutencao(): number {
        return this.taxaManutencao
    }

    public setTaxaManutencao(_taxaManutencao: number): void {
        this.taxaManutencao = _taxaManutencao
    }

    public cobrarTaxa(): void {
        let taxa: number = this.getSaldo() * this.taxaManutencao;
        console.log(`O ${this.getTitular()} foi cobrado ${this.taxaManutencao}% da sua conta corrente.`);
        this.setSaldo((this.getSaldo() - taxa));
    }
}

export default Corrente;