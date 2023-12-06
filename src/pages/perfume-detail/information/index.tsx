import {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'

import AccordionGraph from './accordion-chart'
import {Box, Skeleton, styled} from '@mui/material'

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

interface InformationProps {
  isLoading: boolean
}

const Information = ({isLoading}: InformationProps) => {
  const [series, setSeries] = useState([
    {
      name: '특성',
      data: [80, 50, 30, 40, 70],
    },
  ])

  //   임시
  useEffect(() => {
    setSeries([
      {
        name: '특성',
        data: [80, 50, 30, 40, 70],
      },
    ])
  }, [])

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
            width="220px"
            height="220px"
          />

          <AccordionGraph />
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
