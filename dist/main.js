import Conta from './conta.js';
import Corrente from './corrente.js';
import Poupanca from './poupanca.js';
const contaCorrente = new Corrente("Felisberto Felis", 1000, 0.08);
contaCorrente.cobrarTaxa();
console.log(contaCorrente.recuperarSaldo());
const contaPoupanca = new Poupanca("Joselito Rodrigues", 200, 0.06);
contaPoupanca.renderJuros();
console.log(contaPoupanca.recuperarSaldo());
//# sourceMappingURL=main.js.map