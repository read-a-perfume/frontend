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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const STEPS = 5

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const responsiveContentLengths = (content: string) => {
    if (screenWidth >= 1913) {
      return content.slice(0, 185) + '...'
    } else if (screenWidth >= 1852) {
      return content.slice(0, 145) + '...'
    } else if (screenWidth >= 1667) {
      return content.slice(0, 90) + '...'
    } else if (screenWidth >= 1304) {
      return content.slice(0, 58) + '...'
    } else if (screenWidth >= 1217) {
      return content.slice(0, 38) + '...'
    }
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
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        onRealIndexChange={newIndex => setCurrentIndex(newIndex.activeIndex)}
      >
        {magazineData.map(data => (
          <SwiperSlide key={data.title}>
            <Card
              coverImage={data.image}
              profileImage=""
              title={data.title}
              content={responsiveContentLengths(data.content)}
              hashTags={data.hashtag}
              onClick={() => console.log('magazine card')}
              style={{width: (screenWidth - 425) / 3.1}}
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
