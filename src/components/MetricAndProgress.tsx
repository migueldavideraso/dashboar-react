import { Flex, Text, Metric, ProgressBar } from "@tremor/react";


export default function MetricAndProgress () {

  return (
    <Flex flexDirection="col" className="gap-1 h-52 justify-around pb-4">

      <div>
        <Text>Sales</Text>
        <Metric className="mt-2">$ 57,400</Metric>
      </div>

      <div className="w-full pl-3 pr-3">
        <Text>32% of anual target</Text>
        <ProgressBar value={32} className="mt-5" />
      </div>

    </Flex>
  )
}

