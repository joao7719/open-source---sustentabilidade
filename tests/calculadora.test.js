const assert = require("node:assert/strict");
const { calcularEmissoes } = require("../calculadora");
const base = { carKm: 0, publicKm: 0, flightsKg: 0, kwh: 0, occupants: 1, dietKg: 0, wasteKg: 0 };
assert.deepEqual(calcularEmissoes(base), { mobilityKg: 0, energyKg: 0, totalKg: 0, totalTons: 0 });
assert.equal(calcularEmissoes({ ...base, carKm: 100 }).mobilityKg, 988);
assert.equal(calcularEmissoes({ ...base, kwh: 240, occupants: 2 }).energyKg, 115.2);
assert.equal(calcularEmissoes({ ...base, occupants: 0 }).energyKg, 0);
console.log("4 cenários de cálculo aprovados");
