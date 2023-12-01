import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import CustomIcons from '../../../../assets/icons/custom-Icons'

interface proptype {
  title: string
  number: number
}

const Follow = ({title, number}: proptype) => {
  return (
    <StyledTypography variant='body2'>
      {title + ' '}
      <CustomIcons.HeartIcon style={{width:16.5,height:15,margin:0,padding:0}}/>
      <Typography sx={{letterSpacing: 0.28, color: '#707070'}} variant='body3'>
        {' ' + number}
      </Typography>
    </StyledTypography>
  )
}

export default Follow

const StyledTypography = styled(Typography)`
  font-family: Pretendard;
  font-weight: 500;
  line-height: normal;
  color: #000;
`
