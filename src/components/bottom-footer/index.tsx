import {Box, styled} from '@mui/material'
import SectionTop from './section-top'
import SectionBottom from './section-bottom'

const BottomFooter = () => {
  return (
    <Container>
        <SectionTop />
        <Line/>
        <SectionBottom />
    </Container>
  )
}

export default BottomFooter

const Container = styled(Box)(() => ({
  width: '100%',
  height: '170px',
  marginTop: '120px',
  backgroundColor: '#131313',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}))

const Line = styled(Box)(()=>({
    height: '1px',
    width:'100%',
    backgroundColor:'#707070'
}))
