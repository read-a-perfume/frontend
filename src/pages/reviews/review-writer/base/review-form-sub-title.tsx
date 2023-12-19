import {Typography, styled} from '@mui/material'

const ReviewFormSubTitle = ({title}: {title: string}) => {
  return <Title variant="body4">{title}</Title>
}

export default ReviewFormSubTitle

const Title = styled(Typography)({
  fontWeight: 700,
  marginTop: 0,
})
