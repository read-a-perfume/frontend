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
        width={265}
        height={265}
      />

      <AccordionGraph />
    </Wrapper>
  )
}

const Wrapper = styled.div({
  width: '648px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: '16px',
  padding: '33px 0px',
  border: '1px solid #EDEDED',
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
