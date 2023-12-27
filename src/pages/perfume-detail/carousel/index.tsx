import styled from '@emotion/styled'
import {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import {
  FreeMode,
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
} from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

import Box from '@mui/material/Box'
import {Skeleton} from '@mui/material'

SwiperCore.use([Navigation, Pagination, Autoplay])

interface IfCarouselProps {
  isLoading: boolean
}

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
    src: '/images/perfume-detail/sub4.jpg',
  },
]

const Carousel = ({isLoading}: IfCarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()

  return (
    <Container>
      {isLoading ? (
        <Skeleton width="100%" height="100%"></Skeleton>
      ) : (
        <>
          <CarouselWrapper>
            <Swiper
              spaceBetween={10}
              pagination={{
                type: 'progressbar',
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Pagination, FreeMode, Navigation, Thumbs]}
              className="main-image-wrapper"
            >
              {images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="sub-images-wrapper"
            >
              {images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      height: '123px',
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '1px solid #EDEDED',
                      borderRadius: '12px',
                      cursor: 'pointer',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </CarouselWrapper>
        </>
      )}
    </Container>
  )
}

const Container = styled(Box)({
  width: '100%',
  height: '100%',
})

const CarouselWrapper = styled.div({
  '& .swiper': {
    width: '496.5px',
    height: '588px',

    '& .swiper-pagination-progressbar': {
      zIndex: '100',
      top: 'initial',
      bottom: '0px',
      background: '#DBDBDB',

      '& span': {
        backgroundColor: '#FE7156',
      },
    },
  },

  '& .main-image-wrapper': {
    border: '0.75px solid #EDEDED',
    borderRadius: '12px',
    height: '588px',
  },

  '& .sub-images-wrapper': {
    // marginTop: '24px',
    marginTop: '100px',
    height: '123px',

    '& .swiper-slide': {},
  },
})

export default Carousel
