function calcularEmissoes({ carKm, publicKm, flightsKg, kwh, occupants, dietKg, wasteKg, carFactor = 0.19, publicFactor = 0.06, energyFactor = 0.08 }) {
  const mobilityKg = (carKm * 52 * carFactor) + (publicKm * 52 * publicFactor) + flightsKg;
  const energyKg = (Math.max(0, kwh) / Math.max(1, occupants)) * 12 * energyFactor;
  const totalKg = mobilityKg + energyKg + dietKg + wasteKg;
  return { mobilityKg, energyKg, totalKg, totalTons: totalKg / 1000 };
}
if (typeof module !== "undefined") module.exports = { calcularEmissoes };
