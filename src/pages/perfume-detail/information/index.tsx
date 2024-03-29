import {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'
import {IfInformationProps, IfGraphDataType} from './information-interface'

import AccordionGraph from './accordion-chart'
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material";

const options = {
  colors: ['#FE7156'],
  markers: {
    size: 0,
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['무게감', '지속력', '계절', '확산력', '성별'],
  },
}

const Information = ({isLoading, graphData}: IfInformationProps) => {
  const [series, setSeries] = useState([
    {
      name: '특성',
      data: [0, 0, 0, 0, 0],
    },
  ])
  const sumData = (graphData: IfGraphDataType) => {
    // 무게감
    const dayType =
      Object.values(graphData.dayType).reduce((sum, value) => sum + value, 0) /
      Object.keys(graphData.dayType).length

    // 지속력
    const duration =
      Object.values(graphData.duration).reduce((sum, value) => sum + value, 0) /
      Object.keys(graphData.duration).length

    // 계절
    const season =
      Object.values(graphData.season).reduce((sum, value) => sum + value, 0) /
      Object.keys(graphData.season).length

    // 향수 강도
    const strength =
      Object.values(graphData.strength).reduce((sum, value) => sum + value, 0) /
      Object.keys(graphData.strength).length

    // 성별
    const sex =
      Object.values(graphData.sex).reduce((sum, value) => sum + value, 0) /
      Object.keys(graphData.sex).length

    setSeries([
      {
        name: '특성',
        data: [dayType, duration, season, strength, sex],
      },
    ])
  }

  useEffect(() => {
    if (graphData) {
      sumData(graphData)
    }
  }, [graphData])

  return (
    <>
      {isLoading ? (
        <MUISkeleton />
      ) : (
        <Wrapper>
          <StyleChart
            options={options}
            series={series}
            type="radar"
            width="230px"
            height="210px"
          />

          <AccordionGraph graphData={graphData} />
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: '12px',
  padding: '24px 24px 24px 15px',
  border: '0.75px solid #EDEDED',
})

const StyleChart = styled(Chart)({
  display: 'flex',
  alignItems: 'center',

  '& .apexcharts-yaxis': {
    display: 'none',
  },
  '& .apexcharts-menu-icon': {
    display: 'none',
  },
})

const MUISkeleton = styled(Skeleton)({
  width: '100%',
  height: '348px',
  background: 'rgba(217, 217, 217, 0.30)',
})

export default Information
