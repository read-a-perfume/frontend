import {Typography, styled} from '@mui/material'

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Pagination} from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import FlexBox from '@layouts/flex-box'

interface NoteItemProps {
  notes: NoteType[]
}

type NoteType = {
  id: number
  name: string
  thumbnail?: string
}

SwiperCore.use([Navigation, Pagination])

const SlideItem = ({note}) => (
  <CarouselItem key={note?.name}>
    <FlexBox
      direction="column"
      alignItems="center"
      style={{
        textAlign: 'center',
      }}
    >
      <img src="/images/perfume-detail/자몽.png" alt="note-img" />
      <NotesName>{note?.name}</NotesName>
    </FlexBox>
  </CarouselItem>
)

const NoteCarouselItem = ({notes}: NoteItemProps) => {
  return (
    <Container>
      <Swiper
        slidesPerView={4}
        navigation={true}
        pagination={false}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {notes?.map((note, index) => (
          <SwiperSlide key={index}>
            <SlideItem note={note} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

const Container = styled('div')({
  width: '100%',

  '& .swiper-button-prev, .swiper-button-next': {
    color: '#B4B4B4 !important',
  },

  '& .swiper-button-next': {
    right: '0',
  },
  '& .swiper-button-prev': {
    left: '0',
  },

  '&  .swiper-button-prev:after, .swiper-button-next:after ': {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
  },
})

const CarouselItem = styled('div')({
  minWidth: '25%',
})

const NotesName = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontWeight: '500',
  fontSize: '12px',
  color: '#000',
  marginTop: '13px',
  width: '100px',
})

export default NoteCarouselItem
