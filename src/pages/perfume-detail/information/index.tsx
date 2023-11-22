import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Chart from 'react-apexcharts'

import AccordionGraph from './accordion-chart'

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

const Information = () => {
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
  )
}

const Wrapper = styled.div({
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

export default Information
