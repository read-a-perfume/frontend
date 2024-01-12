import {Popover, Typography, styled} from '@mui/material'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Pagination} from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import FlexBox from '@layouts/flex-box'

interface IfNoteItemProps {
  notes: {
    id: number
    name: string
    thumbnail?: string
  }[]
  anchorEl: any
  noteDescription: string
  handlePopoverOpen: (event: React.MouseEvent<HTMLElement>) => Promise<void>
  handlePopoverClose: () => void
  open: boolean
}

SwiperCore.use([Navigation, Pagination])

const SlideItem = ({
  note,
  anchorEl,
  noteDescription,
  handlePopoverOpen,
  handlePopoverClose,
  open,
}) => (
  <CarouselItem key={note?.name}>
    <FlexBox
      direction="column"
      alignItems="center"
      style={{
        textAlign: 'center',
      }}
    >
      <div
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={`${note.id}`}
      >
        <img src="/images/perfume-detail/자몽.png" alt="note-img" />
        <NotesName>{note?.name}</NotesName>
      </div>

      <StyledPopover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <PopoverText sx={{p: 1}}>{noteDescription}</PopoverText>
      </StyledPopover>
    </FlexBox>
  </CarouselItem>
)

const NoteCarouselItem = ({
  notes,

  anchorEl,
  noteDescription,
  handlePopoverOpen,
  handlePopoverClose,
  open,
}: IfNoteItemProps) => {
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
            <SlideItem
              note={note}
              anchorEl={anchorEl}
              noteDescription={noteDescription}
              handlePopoverOpen={handlePopoverOpen}
              handlePopoverClose={handlePopoverClose}
              open={open}
            />
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
  fontFamily: 'Arita buri !important',
  fontWeight: '500',
  fontSize: '12px',
  color: '#000',
  marginTop: '13px',
  width: '100px',
})

const StyledPopover = styled(Popover)({
  '& .MuiPopover-paper': {
    width: '200px',
    padding: '10px',
    background: '#FE7156',
    color: '#fff',
    borderRadius: '30.5px 30.5px 30.5px 0px',
    boxShadow: 'none',
  },
})

const PopoverText = styled(Typography)({
  fontSize: '11px',
  fontWeight: '500',
  lineHeight: '16px',
  fontFamily: 'Arita buri',
})

export default NoteCarouselItem
