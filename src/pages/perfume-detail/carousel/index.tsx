import {useState} from 'react'
import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import {autoPlay} from 'react-swipeable-views-utils'
import SwipeableViews from 'react-swipeable-views'
import MobileStepper from '@mui/material/MobileStepper'

import Box from '@mui/material/Box'
import ThumbGallery from './ThumbGallery'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    src: '/images/perfume-detail/main.jpg',
  },
  {
    src: '/images/perfume-detail/sub1.png',
  },
  {
    src: '/images/perfume-detail/sub2.jpg',
  },
  {
    src: '/images/perfume-detail/sub3.jpg',
  },
  {
    src: '/images/perfume-detail/sub4.png',
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
      <CarouselWrapper>
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
      </CarouselWrapper>

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
  height: '100%',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const CarouselWrapper = styled.div({
  border: '0.75px solid #EDEDED',
  borderRadius: '12px',
  // marginBottom: '37.8px',
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
