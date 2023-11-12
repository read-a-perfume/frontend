import React, {useEffect} from 'react'
import styled from '@emotion/styled'

interface CarouselProps {
  children: React.ReactNode[]
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  currentIndex,
  setCurrentIndex,
}) => {
  const itemCount = React.Children.count(children) - 2

  useEffect(() => {
    const autoPlayId = window.setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % itemCount)
    }, 6000)

    return () => {
      if (autoPlayId) {
        clearInterval(autoPlayId)
      }
    }
  }, [itemCount, setCurrentIndex])

  return (
    <div style={{position: 'relative'}}>
      <CarouselContainer>
        {React.Children.map(children, (child, index) => {
          return (
            <CarouselItem
              key={index}
              width={(window.innerWidth - 440) / 3}
              style={{
                transform: `translateX(-${currentIndex * 105}%)`,
              }}
            >
              {child}
            </CarouselItem>
          )
        })}
      </CarouselContainer>
    </div>
  )
}

export default Carousel

const CarouselContainer = styled.div({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'hidden',
})

const CarouselItem = styled.div(({width}: {width: number}) => ({
  flex: '0 0 auto',
  width: width,
  transition: 'transform 2.5s ease',
  margin: '0 16px',
}))
