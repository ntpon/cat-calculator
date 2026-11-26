// Each point pairs a cat age and a human age in months.
const ageChart = [
  [0, 0],
  [1, 12],
  [3, 48],
  [6, 120],
  [12, 180],
  [24, 288],
  [36, 336],
];

export function convertAge(months, target) {
  const input = target === "human" ? 0 : 1;
  const output = 1 - input;
  const upper = ageChart.findIndex((point) => point[input] >= months);
  const endIndex = upper === -1 ? ageChart.length - 1 : Math.max(1, upper);
  const start = ageChart[endIndex - 1];
  const end = ageChart[endIndex];
  const fraction = (months - start[input]) / (end[input] - start[input]);
  return Math.round(start[output] + fraction * (end[output] - start[output]));
}

export function formatAge(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0 && months > 0) return `${months} M`;
  return months ? `${years} Y ${months} M` : `${years} Y`;
}
