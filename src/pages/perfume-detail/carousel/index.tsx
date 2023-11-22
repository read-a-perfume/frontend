import {useState} from 'react'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'

import styled from '@emotion/styled'

import ThumbGallery from './ThumbGallery'
import main from '../../../../public/images/perfume-detail/main.jpg'
import sub1 from '../../../../public/images/perfume-detail/sub1.png'
import sub2 from '../../../../public/images/perfume-detail/sub2.jpg'
import sub3 from '../../../../public/images/perfume-detail/sub3.jpg'
import sub4 from '../../../../public/images/perfume-detail/sub4.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    src: main,
  },
  {
    src: sub1,
  },
  {
    src: sub2,
  },
  {
    src: sub3,
  },
  {
    src: sub4,
  },
]

const Carousel = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const maxSteps = images.length

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Container>
      <Wrapper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          threshold={1}
        >
          {images.map((step, index) => (
            <ImgWrapper key={step.src}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    padding: '5px',
                  }}
                  src={step.src}
                  alt={step.src}
                />
              ) : null}
            </ImgWrapper>
          ))}
        </AutoPlaySwipeableViews>
      </Wrapper>

      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={''}
        backButton={''}
        sx={{
          '.MuiMobileStepper-progress': {
            width: '100%',
            backgroundColor: '#DBDBDB',
          },
          '.MuiMobileStepper-progressBar': {
            backgroundColor: '#FE7156',
          },
        }}
      />

      <ThumbGallery
        images={images}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </Container>
  )
}

const Container = styled(Box)({
  width: '100%',
  // maxWidth: 662,
  maxWidth: 496,
  // maxHeight: 588,
  flexGrow: 1,
})
const Wrapper = styled.div({
  border: '0.75px solid #EDEDED',
  borderRadius: '12px',
  marginBottom: '37.8px',
})
const ImgWrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& img': {
    width: '100%',
    height: '100%',
    borderRadius: '12px',
  },
})

export default Carousel
