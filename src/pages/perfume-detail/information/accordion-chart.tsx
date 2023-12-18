import {useState, useEffect} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {styled} from '@mui/system'
import {IfInformationProps} from './information-interface'

import ChartBar from './ChartBar'
import FlexBox from '@layouts/flex-box'

const AccordionChart = ({graphData}: IfInformationProps) => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const [accordionData, setAccordionData] = useState([
    {
      title: '무게감',

      statisticsData: [
        {subTitle: '약함', data: 0},
        {subTitle: '보통', data: 0},
        {subTitle: '강함', data: 0},
      ],
    },
    {
      title: '지속력',

      statisticsData: [
        {subTitle: '약함', data: 0},
        {subTitle: '보통', data: 0},
        {subTitle: '강함', data: 0},
      ],
    },
    {
      title: '계절',

      statisticsData: [
        {subTitle: '봄', data: 0},
        {subTitle: '여름', data: 0},
        {subTitle: '가을', data: 0},
        {subTitle: '겨울', data: 0},
      ],
    },
    {
      title: '확산력',

      statisticsData: [
        {subTitle: '약함', data: 0},
        {subTitle: '보통', data: 0},
        {subTitle: '강함', data: 0},
      ],
    },
    {
      title: '성별',

      statisticsData: [
        {subTitle: '여성', data: 0},
        {subTitle: '공용', data: 0},
        {subTitle: '남성', data: 0},
      ],
    },
  ])

  const getMaximumData = statisticsData => {
    const maxItem = statisticsData.reduce(
      (max, item) => (item.data > max.data ? item : max),
      {data: -Infinity},
    )
    return maxItem
  }

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  useEffect(() => {
    setAccordionData(prevData => {
      const updatedData = [...prevData]

      // 무게감
      updatedData[0].statisticsData = [
        {subTitle: '약함', data: graphData.dayType.DAILY},
        {subTitle: '보통', data: graphData.dayType.REST},
        {
          subTitle: '강함',
          data: graphData.dayType.SPECIAL + graphData.dayType.TRAVEL,
        },
      ]

      // 지속력
      updatedData[1].statisticsData = [
        {
          subTitle: '약함',
          data: graphData.duration.SHORT + graphData.duration.TOO_SHORT,
        },
        {subTitle: '보통', data: graphData.duration.MEDIUM},
        {
          subTitle: '강함',
          data: graphData.duration.LONG,
        },
      ]

      // 계절
      updatedData[2].statisticsData = [
        {subTitle: '봄', data: graphData.season.SPRING},
        {subTitle: '여름', data: graphData.season.SUMMER},
        {subTitle: '가을', data: graphData.season.FALL},
        {subTitle: '겨울', data: graphData.season.WINTER},
      ]

      // 확산력
      updatedData[3].statisticsData = [
        {subTitle: '약함', data: graphData.strength.LIGHT},
        {subTitle: '보통', data: graphData.strength.MODERATE},
        {subTitle: '강함', data: graphData.strength.HEAVY},
      ]

      // 성별
      updatedData[4].statisticsData = [
        {subTitle: '여성', data: graphData.sex.FEMALE},
        {subTitle: '공용', data: graphData.sex.OTHER},
        {subTitle: '남성', data: graphData.sex.MALE},
      ]

      return updatedData
    })
  }, [graphData])

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              width: '253px',
              display: 'flex',
              flexDirection: 'column',
              border: '.75px solid #EDEDED',
              borderRadius: '7.5px !important',
              marginBottom:
                index === accordionData.length - 1
                  ? '0px !important'
                  : '12px !important',
              boxShadow: 'none',

              '&.MuiAccordion-root:before': {
                opacity: '0',
              },

              '& .Mui-expanded': {
                // opacity: '0',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <FlexBox
                justifyContent="space-between"
                alignItems="center"
                style={{width: '100%'}}
              >
                <MUIText sx={{color: '#A9A9A9', width: '20%'}}>
                  {item.title}
                </MUIText>

                <MUIText sx={{color: '#000', fontWeight: '500'}}>
                  {getMaximumData(item.statisticsData).subTitle}
                </MUIText>

                <ChartBar percent={getMaximumData(item.statisticsData).data} />

                <MUIText sx={{color: '#000', fontWeight: '500'}}>
                  {getMaximumData(item.statisticsData).data}%
                </MUIText>
              </FlexBox>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                paddingLeft: '2.9rem',

                textAlign: 'right',
                position: 'relative',
              }}
            >
              {item.statisticsData.map((statisticsItem, index) => (
                <FlexBox
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                  style={{}}
                  key={index}
                >
                  <MUIText
                    sx={{
                      color: '#000',
                      fontWeight: '500',
                      textAlign: 'left',
                      width: '11%',
                    }}
                  >
                    {statisticsItem.subTitle}
                  </MUIText>

                  <ChartBar percent={statisticsItem.data} />

                  <MUIText
                    sx={{
                      color: '#000',
                      fontWeight: '500',
                      width: '33px',
                    }}
                  >
                    {statisticsItem.data}%
                  </MUIText>
                </FlexBox>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  )
}

const MUIText = styled(Typography)({
  fontSize: '12px !Important',
})
export default AccordionChart
