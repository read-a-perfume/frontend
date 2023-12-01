import {Typography, styled} from '@mui/material'

interface proptype {
  title: string
  number: number
}

const EachReviewCount = ({title, number}: proptype) => {
  return (
    <EachReviewCountContainer>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='body2'>
        <Typography sx={{fontSize: '20px', color: 'black'}} variant='body4'>{number + ' '}</Typography>건
      </Typography>
    </EachReviewCountContainer>
  )
}

const EachReviewCountContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Pretendard;
  font-weight: 500;
  color: #707070;
`

export default EachReviewCount
