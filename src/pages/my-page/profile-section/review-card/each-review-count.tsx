import {Box, Typography, styled} from '@mui/material'

interface proptype {
  title: string
  number: number
}

const EachReviewCount = ({title, number}: proptype) => {
  return (
    <EachReviewCountContainer>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">
        <Typography sx={{fontSize: '20px', color: 'black'}} variant="body4">
          {number + ' '}
        </Typography>
        건
      </Typography>
    </EachReviewCountContainer>
  )
}

const EachReviewCountContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontFamily: 'Pretendard',
  fontWeight: 500,
  color: theme.palette.grey[500],
}))

export default EachReviewCount
