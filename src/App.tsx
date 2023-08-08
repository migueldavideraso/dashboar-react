
import './App.css'
import DonutChartBase from './components/DonutChart'
import MetricAndProgress from './components/MetricAndProgress'
import TabListBase from './components/TabListBase'
import { ReactNode } from 'react'

import { Grid, Col, Card, Title } from "@tremor/react";
import AreaChartBase from './components/AreaChart';
import BarChartBase from './components/BarChart'
import LineChartBase from './components/LineChart'
import ScatterChartBase from './components/ScatterChart'
import ListBase from './components/ListBase'


function App() {

  return (
    <main className='h-full w-full bg-slate-200 top-0 relative flex flex-col gap-4 overflow-auto p-5'>

        <header className='m-4'>
          <h1 className='text-2xl text-center font-bold text-gray-700 ' > Dashboard with react, tailwind and tremor </h1>
        </header>

        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4 p-4 m-auto max-w-4xl w-full">

          <Col numColSpan={1} numColSpanLg={2}>
            <GridCard>
              <Title>Area Chart</Title>
              <AreaChartBase />
            </GridCard>
          </Col>

          <GridCard>
            <Title>Bar Chart</Title>
            <BarChartBase />
          </GridCard>

          <Col numColSpan={1} numColSpanLg={2}>
            <GridCard>
              <Title>Line Chart</Title>
              <LineChartBase />
            </GridCard>
          </Col>

          <GridCard>
            <Title>Donut Chart</Title>
            <DonutChartBase />
          </GridCard>

          <Col numColSpan={1} numColSpanLg={2}>
            <GridCard>
              <Title>Scatter Chart</Title>
              <ScatterChartBase />
            </GridCard>
          </Col>

          <GridCard>
            <Title>Metrics And Progress</Title>
            <MetricAndProgress />
          </GridCard>

          <Col numColSpan={1} numColSpanLg={2}>
            <GridCard>
              <Title>Tabs</Title>
              <TabListBase />
            </GridCard>
          </Col>

          <GridCard>
            <Title>List</Title>
            <ListBase />
          </GridCard>

        </Grid>

        <footer className='mb-4'>
          <h1 className='text-xl text-center font-bold text-gray-700 ' > And more... </h1>
        </footer>

    </main>
  )
}

export default App



function GridCard ({ children }: { children: ReactNode}) {

  return (
    <Card className='flex flex-col gap-4 pt-2 pb-2 pl-5 pr-5'>
      {children}
    </Card>
  )
}