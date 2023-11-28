import {useState} from 'react'
import {Box, Typography, styled} from '@mui/material'

import FlexBox from '@layouts/flex-box'
import CustomIcons from '@assets/icons/custom-Icons'

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

const NoteCarouselItem = ({notes}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : notes.length - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < notes.length - 1 ? prevIndex + 1 : 0,
    )
  }

  return (
    <CarouselContainer>
      {currentIndex !== 0 && <StyleBeforeArrow onClick={handlePrev} />}

      <CarouselWrapper sx={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {notes?.map(note => (
          <SlideItem key={note?.name} note={note} />
        ))}
      </CarouselWrapper>

      {currentIndex !== notes?.length - 5 && (
        <StyleAfterArrow onClick={handleNext} />
      )}
    </CarouselContainer>
  )
}

const CarouselContainer = styled('div')({
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
})

const CarouselWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  transition: 'transform 0.5s ease',
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

const SlideButton = styled(CustomIcons.BeforeIcon)({
  position: 'absolute',
  top: '50%',
  transform: ' translateY(-50%)',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: ' pointer',
  color: '#333',
  outline: 'none',
})

const StyleBeforeArrow = styled(SlideButton)({
  left: '0px',
  zIndex: '10',
})

const StyleAfterArrow = styled(SlideButton)({
  transform: 'rotate(180deg)',
  right: ' 0px',
})

export default NoteCarouselItem
