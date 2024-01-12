import {Box, Step, StepLabel, Stepper, Typography, styled} from '@mui/material'
import {IfReviewFormProgassStateProps} from '../types'

const category = ['향수 이미지 업로드', '향수 특징 선택', '상세 리뷰 작성']

const ReviewFormProgassState = ({prograss}: IfReviewFormProgassStateProps) => {
  return (
    <Box
      component="header"
      sx={{
        marginTop: '74px',
        marginBottom: '64px',
      }}
    >
      <div>
        <Typography
          variant="h2"
          fontFamily="Arita buri"
          sx={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          리뷰 작성하기
        </Typography>
        <Stepper activeStep={prograss} alternativeLabel>
          {category.map(label => (
            <Step key={label}>
              <Label>{label}</Label>
            </Step>
          ))}
        </Stepper>
      </div>
    </Box>
  )
}

export default ReviewFormProgassState

const Label = styled(StepLabel)(({theme}) => ({
  '.MuiStepIcon-text': {
    fill: '#fff',
  },
  '.MuiSvgIcon-root': {
    fontSize: '32px',
  },
  '& span.Mui-completed': {
    color: '#A9A9A9',
  },
  '.MuiStepLabel-label.Mui-active': {
    color: theme.palette.primary.main,
  },
}))
