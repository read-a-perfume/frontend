import React, {useEffect, useState} from 'react'
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    <div style={{position: 'relative', width: screenWidth - 360}}>
      <CarouselContainer>
        {React.Children.map(children, (child, index) => {
          return (
            <CarouselItem
              key={index}
              style={{
                transform: `translateX(-${currentIndex * 108}%)`,
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
  marginLeft: 20,
})

const CarouselItem = styled.div({
  flex: '0 0 auto',
  transition: 'transform 2.5s ease',
  margin: '0 16px',
})
