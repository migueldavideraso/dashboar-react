import { ScatterChart } from "@tremor/react";

const chartdata = [
  {
    Country: "Argentina",
    Life_expectancy: 76.3,
    GDP: 13467.1236,
    Population: 43417765,
  },
  {
    Country: "Australia",
    Life_expectancy: 82.8,
    GDP: 56554.3876,
    Population: 23789338,
  },
  {
    Country: "Austria",
    Life_expectancy: 81.5,
    GDP: 43665.947,
    Population: 8633169,
  },
  // ...
];

export default function ScatterChartBase () {

  return (
    <ScatterChart
      className="h-52"
      yAxisWidth={50}
      data={chartdata}
      category="Country"
      x="GDP"
      y="Life_expectancy"
      size="Population"
      showOpacity={true}
      minYValue={60}
      valueFormatter={{
        x: (amount) => `$${(amount / 1000).toFixed(1)}K`,
        y: (lifeExp) => `${lifeExp} yrs`,
        size: (population) => `${(population / 1000000).toFixed(1)}M people`,
      }}
      showLegend={false}
    />
  )
}