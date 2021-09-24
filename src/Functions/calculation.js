const checkINaN = (val) => {
  return isNaN(val) ? 0 : val;
};
export const dailyAdSpend = (budget) => checkINaN((budget / 30).toFixed(2));

export const costPerThousandsImpression = (budget, data) =>
  checkINaN((1000 / data?.ipd).toFixed(2));

const averagePerson = (population, rating) => population * (rating / 1000);

const quantity = (cost, rate) => (cost / rate).toFixed(0);

export const impression = (budget, data) =>
  checkINaN((budget * data?.ipd).toFixed(0));
export const roas = (spend, sale) => checkINaN((sale / spend).toFixed(2));
