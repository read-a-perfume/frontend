import {MobileStepper} from '@mui/material'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import {useEffect, useState} from 'react'
import Card from '@components/base/card.js'
import {magazineData} from '../constants'
import FlexBox from '@layouts/flex-box'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
}

const CarouselWithStepper = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const STEPS = 5

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Carousel
        responsive={responsive}
        className="carousel"
        arrows={false}
        autoPlay
        autoPlaySpeed={4500}
        rewind
        rewindWithAnimation
        customTransition={'transform 2.5s ease'}
        beforeChange={nextSlide => {
          setCurrentIndex(nextSlide)
        }}
      >
        {magazineData.map(data => (
          <Card
            key={data.title}
            coverImage={data.image}
            profileImage=""
            title={data.title}
            content={data.content}
            hashTags={data.hashtag}
            onClick={() => console.log('magazine card')}
            style={{width: (screenWidth - 425) / 3.1}}
          />
        ))}
      </Carousel>
      <FlexBox justifyContent="center">
        <MobileStepper
          variant="progress"
          steps={STEPS}
          position="static"
          activeStep={currentIndex + 1}
          nextButton={''}
          backButton={''}
          sx={{
            '.MuiMobileStepper-progress': {
              width: '100%',
              height: 2,
              backgroundColor: '#DBDBDB',
            },
            '.MuiMobileStepper-progressBar': {
              height: 2,
              backgroundColor: '#FE7156',
            },
            marginTop: 10,
            width: 48 * STEPS,
          }}
        />
      </FlexBox>
    </>
  )
}

export default CarouselWithStepper
