import styled from '@emotion/styled'

const ThumbGallery = ({images, activeStep, setActiveStep}: any) => {
  const handleClick = (index: any) => {
    setActiveStep(index)
  }

  return (
    <Wrapper>
      {images.map((image, index) => (
        <Image
          key={index}
          onClick={() => handleClick(index)}
          isActive={index === activeStep ? 'true' : ''}
        >
          <img src={image?.src} alt="" />
        </Image>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '59px',
})

const Image = styled.div<{isActive: string}>(
  {
    width: '100%',
    backgroundSize: 'cover',
    cursor: 'pointer',
    borderRadius: '16px',
    marginRight: '32px',
    '&:last-child': {
      marginRight: '0',
    },

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  props => ({
    '& img': {
      border: props.isActive ? '2px solid #eee' : 'none',
    },
  }),
)

export default ThumbGallery
