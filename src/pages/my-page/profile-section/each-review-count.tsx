import {Typography, styled} from '@mui/material'

interface proptype {
  title: string
  number: number
}

const EachReviewCount = ({title, number}: proptype) => {
  return (
    <EachReviewCountContainer>
      <Typography>{title}</Typography>
      <Typography sx={{fontSize: '16px'}}>
        <span style={{fontSize: '20px', color: 'black'}}>{number + ' '}</span>건
      </Typography>
    </EachReviewCountContainer>
  )
}

const EachReviewCountContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
`

export default EachReviewCount
