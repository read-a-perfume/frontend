import {useState} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChartBar from './ChartBar'
import FlexBox from '@layouts/flex-box'
import {styled} from '@mui/system'
import {Box} from '@mui/material'

const arrayTest = Array.from({length: 5}, (_, index) => index)

const AccordionChart = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      {arrayTest.map((item, index) => (
        <>
          {/* 지워야됨 */}
          <Box sx={{display: 'none'}}>{item}</Box>

          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              width: '253px',
              display: 'flex',
              flexDirection: 'column',
              border: '.75px solid #EDEDED',
              borderRadius: '7.5px !important',
              marginBottom: '12px',
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
                <MUIText sx={{color: '#A9A9A9'}}>지속력</MUIText>

                <MUIText sx={{color: '#000', fontWeight: '500'}}>강함</MUIText>

                <ChartBar percent={50} />

                <MUIText sx={{color: '#000', fontWeight: '500'}}>20%</MUIText>
              </FlexBox>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                paddingLeft: '2.2rem',
              }}
            >
              <FlexBox justifyContent="center" alignItems="center" gap="11px">
                <MUIText sx={{color: '#000', fontWeight: '500'}}>강함</MUIText>

                <ChartBar percent={50} />

                <MUIText sx={{color: '#000', fontWeight: '500'}}>20%</MUIText>
              </FlexBox>

              <FlexBox justifyContent="center" alignItems="center" gap="11px">
                <MUIText sx={{color: '#000', fontWeight: '500'}}>보통</MUIText>

                <ChartBar percent={50} />

                <MUIText sx={{color: '#000', fontWeight: '500'}}>20%</MUIText>
              </FlexBox>

              <FlexBox justifyContent="center" alignItems="center" gap="11px">
                <MUIText sx={{color: '#000', fontWeight: '500'}}>약함</MUIText>

                <ChartBar percent={50} />

                <MUIText sx={{color: '#000', fontWeight: '500'}}>20%</MUIText>
              </FlexBox>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  )
}

const MUIText = styled(Typography)({
  fontSize: '12px !Important',
})
export default AccordionChart
