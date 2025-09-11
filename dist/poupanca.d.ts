import Conta from "./conta.js";
declare class Poupanca extends Conta {
    private taxaRendimento;
    constructor(titular: string, saldo: number, taxaRendimento: number);
    renderJuros(): void;
}
export default Poupanca;
//# sourceMappingURL=poupanca.d.ts.map