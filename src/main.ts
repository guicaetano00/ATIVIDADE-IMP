import Corrente from "./corrente.js";
import Poupanca from "./poupanca.js";

let corrente = new Corrente(1000, "Felisberto Felis", 0.08);

corrente.depositar(200);
corrente.cobrarTaxa();
corrente.sacar(2000);

let poupanca = new Poupanca(200, "Joselito Rodrigues", 0.06);

poupanca.depositar(75.12);
poupanca.renderJuros();
poupanca.sacar(100);