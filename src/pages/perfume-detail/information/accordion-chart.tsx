import {useState} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChartBar from './ChartBar'
import FlexBox from '@layouts/flex-box'

// import styled from '@emotion/styled'

const AccordionChart = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          background: 'red',
          width: '230px',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #EDEDED',
          borderRadius: '7.5px !important',
          marginBottom: '18px',
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
          sx={{position: 'relative'}}
        >
          <FlexBox
            justifyContent="space-between"
            alignItems="center"
            // gap="14px"
            // style={{width: '100%'}}
          >
            {/* TODO: 텍스트 길이에따라서 길이조절 */}
            <Typography sx={{color: '#A9A9A9', fontSize: '12px'}}>
              무게감
            </Typography>
            {/* 수치에 따라서 텍스트 변경할 예정
          EX) 20%이하면 약함, 50% 중간*/}
            <Typography
              sx={{color: '#000', fontWeight: '500', fontSize: '12px'}}
            >
              강함
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingLeft: '3.1rem',
          }}
        >
          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              강함
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              보통
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              약함
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #EDEDED',
          borderRadius: '10px !important',
          marginBottom: '24px',
          boxShadow: 'none',
          '&.MuiAccordion-root:before': {
            opacity: '0',
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
            {/* TODO: 텍스트 길이에따라서 길이조절 */}
            <Typography sx={{color: '#A9A9A9'}}>지속력</Typography>
            {/* 수치에 따라서 텍스트 변경할 예정
          EX) 20%이하면 약함, 50% 중간*/}
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              강함
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionSummary>

        <AccordionDetails sx={{paddingLeft: '3.1rem', marginTop: '0'}}>
          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              강함
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              보통
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              약함
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #EDEDED',
          borderRadius: '10px !important',
          marginBottom: '24px',
          boxShadow: 'none',
          '&.MuiAccordion-root:before': {
            opacity: '0',
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
            {/* TODO: 텍스트 길이에따라서 길이조절 */}
            <Typography sx={{width: '42px', color: '#A9A9A9'}}>계절</Typography>
            {/* 수치에 따라서 텍스트 변경할 예정
          EX) 20%이하면 약함, 50% 중간*/}
            <Typography sx={{width: '42px', color: '#000', fontWeight: '500'}}>
              가을
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionSummary>

        <AccordionDetails sx={{paddingLeft: '3.1rem', marginTop: '0'}}>
          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{width: '42px', color: '#000', fontWeight: '500'}}>
              봄
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{width: '42px', color: '#000', fontWeight: '500'}}>
              여름
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{width: '42px', color: '#000', fontWeight: '500'}}>
              가을
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{width: '42px', color: '#000', fontWeight: '500'}}>
              겨울
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #EDEDED',
          borderRadius: '10px !important',
          marginBottom: '24px',
          boxShadow: 'none',
          '&.MuiAccordion-root:before': {
            opacity: '0',
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
            {/* TODO: 텍스트 길이에따라서 길이조절 */}
            <Typography sx={{color: '#A9A9A9'}}>확산력</Typography>
            {/* 수치에 따라서 텍스트 변경할 예정
          EX) 20%이하면 약함, 50% 중간*/}
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              빠름
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionSummary>

        <AccordionDetails sx={{paddingLeft: '3.1rem', marginTop: '0'}}>
          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              빠름
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              느림
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #EDEDED',
          borderRadius: '10px !important',
          marginBottom: '24px',
          boxShadow: 'none',
          '&.MuiAccordion-root:before': {
            opacity: '0',
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
            {/* TODO: 텍스트 길이에따라서 길이조절 */}
            <Typography sx={{width: '42px', color: '#A9A9A9'}}>성별</Typography>
            {/* 수치에 따라서 텍스트 변경할 예정
          EX) 20%이하면 약함, 50% 중간*/}
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              여자
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionSummary>

        <AccordionDetails sx={{paddingLeft: '3.1rem', marginTop: '0'}}>
          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              여자
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              공용
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center" gap="11px">
            <Typography sx={{color: '#000', fontWeight: '500'}}>
              남자
            </Typography>

            <ChartBar percent={50} />

            <Typography sx={{color: '#000', fontWeight: '500'}}>20%</Typography>
          </FlexBox>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionChart
