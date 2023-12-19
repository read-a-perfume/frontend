import {MobileStepper} from '@mui/material'
import 'react-multi-carousel/lib/styles.css'
import {useEffect, useState} from 'react'
import Card from '@components/base/card.js'
import {magazineData} from '../constants'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import FlexBox from '@layouts/flex-box'
import 'swiper/css'

const CarouselWithStepper = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const STEPS = 5
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sliceContent = (content: string) => {
    return content.slice(0, 20) + '...'
  }

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={1000}
        rewind
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        onRealIndexChange={newIndex => setCurrentIndex(newIndex.activeIndex)}
      >
        {magazineData.map(data => (
          <SwiperSlide key={data.id} style={{width: 384, height: 462}}>
            <Card
              width={`${(screenWidth - 720 - 132) / 3}px`}
              height="442px"
              coverImageHeight={'240px'}
              coverImage={data.image}
              profileImage="images/Rectangle7370.png"
              title={data.title}
              content={sliceContent(data.content)}
              hashTags={data.hashtag}
              onClick={() => console.log('magazine card')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
