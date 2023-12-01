import {Box, Typography, styled} from '@mui/material'
import {ReactNode} from 'react'

interface proptype {
  icon: ReactNode
  title: string
  value: number
}

const FeedFooterContent = ({icon, title, value}: proptype) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      {icon}
      <FooterText variant="body3">{`${title} ${value}개`}</FooterText>
    </Box>
  )
}

export default FeedFooterContent

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Pretendard',
  fontWeight: 500,
  color: theme.palette.grey['700'],
  marginLeft: '8px',
}));