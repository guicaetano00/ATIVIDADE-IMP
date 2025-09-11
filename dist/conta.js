class Conta {
    titular;
    saldo;
    constructor(_titular, _saldo) {
        this.titular = _titular;
        this.saldo = _saldo;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(_titular) {
        this.titular = _titular;
    }
    getSaldo() {
        return this.saldo;
    }
    setValor(_saldo) {
        this.saldo = _saldo;
    }
    setSaldo(_saldo) {
        this.saldo = _saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
        else {
            console.log("Você não tem saldo suficiente");
        }
    }
    recuperarSaldo() {
        console.log(`O saldo do cliente ${this.titular} é de R$ ${this.saldo.toFixed(2)}`);
    }
}
export default Conta;
//# sourceMappingURL=conta.js.map