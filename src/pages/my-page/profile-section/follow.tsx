import styled from '@emotion/styled'
import {Typography} from '@mui/material'

interface proptype {
  title: string
  number: number
}

const Follow = ({title, number}: proptype) => {
  return (
    <StyledTypography>
      {title}
      <span style={{fontSize: 14, letterSpacing: 0.28, color: '#707070'}}>
        {number}
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
