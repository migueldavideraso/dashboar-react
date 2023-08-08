import { DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];


export default function DonutChartBase () {

  const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <DonutChart
      index="name"
      valueFormatter={valueFormatter}
      colors={["fuchsia", "violet", "indigo", "rose", "cyan", "amber"]}
      data={cities}
      category="sales"
      className="h-52"
    />
  )
}

