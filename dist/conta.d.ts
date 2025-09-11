declare class Conta {
    private titular;
    private saldo;
    constructor(_titular: string, _saldo: number);
    getTitular(): string;
    setTitular(_titular: string): void;
    getSaldo(): number;
    setValor(_saldo: number): void;
    setSaldo(_saldo: number): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    recuperarSaldo(): void;
}
export default Conta;
//# sourceMappingURL=conta.d.ts.map