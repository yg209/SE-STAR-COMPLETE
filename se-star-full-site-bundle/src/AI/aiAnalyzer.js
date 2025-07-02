export function analyzeWalletActivity(transactions) {
  let score = 0;

  transactions.forEach((tx) => {
    if (tx.to && tx.to.includes("swap") && tx.value > 0.1) {
      score += 2;
    }
    if (tx.input.includes("0xa9059cbb")) {
      score += 1; // suspicious token transfer
    }
    if (tx.gasPrice > 10000000000) {
      score += 1;
    }
  });

  if (score >= 5) return "High Risk";
  if (score >= 3) return "Medium Risk";
  return "Low Risk";
}