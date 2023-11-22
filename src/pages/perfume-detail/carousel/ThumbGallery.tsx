import styled from '@emotion/styled'

const ThumbGallery = ({images, activeStep, setActiveStep}: any) => {
  const handleClick = (index: any) => {
    setActiveStep(index)
  }

  return (
    <Wrapper>
      {images.map((image, index) => (
        <ImageWrapper
          key={index}
          onClick={() => handleClick(index)}
          isActive={index === activeStep ? 'true' : ''}
        >
          <img src={image?.src} alt="" />
        </ImageWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

const ImageWrapper = styled.div<{isActive: string}>(
  {
    width: '100%',
    backgroundSize: 'cover',
    cursor: 'pointer',
    borderRadius: '12px',
    marginRight: '24px',
    '&:last-child': {
      marginRight: '0',
    },

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '12px',
      overflow: 'hidden',
    },
  },
  props => ({
    '& img': {
      border: props.isActive ? '2px solid #eee' : 'none',
    },
  }),
)

export default ThumbGallery
