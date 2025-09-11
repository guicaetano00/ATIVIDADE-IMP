abstract class Conta {
    private titular: string;
    private saldo: number;

    constructor(
        _titular: string,
        _saldo: number
    ) {
        this.titular = _titular;
        this.saldo = _saldo;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo
    }

    public depositar(valor: number): void {
        console.log(`O ${this.titular} depositou ${valor} no banco`);
        this.saldo += valor
    }

    public sacar(valor: number): void {
        console.log(this.saldo.toFixed(2));
        if (this.saldo >= valor) {
            console.log(`O ${this.titular} sacou ${valor} do banco`);
            this.saldo -= valor;
        } else {
            console.log(`Você não tem saldo suficiente`);
        }
        console.log(`O saldo do cliente ${this.titular} é de R$${this.saldo}.`);
    }

    public recuperarSaldo(): number {
        return this.saldo;
    }
}

export default Conta;