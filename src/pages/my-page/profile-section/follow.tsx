import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import CustomIcons from '../../../assets/icons/custom-Icons'

interface proptype {
  title: string
  number: number
}

const Follow = ({title, number}: proptype) => {
  return (
    <StyledTypography>
      {title + ' '}
      <CustomIcons.HeartIcon style={{width:16.5,height:15,margin:0,padding:0}}/>
      <span style={{fontSize: '14px', letterSpacing: 0.28, color: '#707070'}}>
        {' ' + number}
      </span>
    </StyledTypography>
  )
}

export default Follow

const StyledTypography = styled(Typography)`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`
