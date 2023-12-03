import {Typography, styled} from '@mui/material'
import CustomIcons from '../../../../assets/icons/custom-Icons'

interface proptype {
  title: string
  number: number
}

const Follow = ({title, number}: proptype) => {
  return (
    <StyledTypography variant="body2">
      {title}
      <CustomIcons.HeartIcon
        style={{
          width: 16.5,
          height: 15,
          marginLeft: '0.4em',
          marginRight: '0.15em',
        }}
      />
      <Typography sx={{letterSpacing: 0.28, color: '#707070'}} variant="body3">
        {' ' + number}
      </Typography>
    </StyledTypography>
  )
}

export default Follow

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
}))
