export const dailyAdSpend = (budget) => `${(budget / 30).toFixed(2)}$`;

export const costPerThousandsImpression = (budget, data) =>
  (1000 / data?.ipd).toFixed(2);

const averagePerson = (population, rating) => population * (rating / 1000);

const quantity = (cost, rate) => (cost / rate).toFixed(0);

export const impression = (budget, data) => (budget * data?.ipd).toFixed(0);
export const roas = (spend,sale)=>(sale/spend).toFixed(2)
