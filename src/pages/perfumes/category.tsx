import {useState} from 'react'
import styled from '@emotion/styled'

import FlexBox from '@layouts/flex-box'

import {Typography} from '@mui/material'
// import categoryImg1 from './images/fruity.png'

const CATEGORIES = [
  {
    id: '0',
    img: '',
    name: 'fruity',
  },
  {
    id: '1',
    img: '',
    name: 'woody',
  },
  {
    id: '2',
    img: '',
    name: 'green',
  },
  {
    id: '3',
    img: '',
    name: 'spicy',
  },
  {
    id: '4',
    img: '',
    name: 'animal',
  },
  {
    id: '5',
    img: '',
    name: 'citrus',
  },
  {
    id: '6',
    img: '',
    name: 'light',
  },
  {
    id: '7',
    img: '',
    name: 'musk',
  },
  {
    id: '8',
    img: '',
    name: 'heavy',
  },
]
const Category = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('fruity')

  const handleLeftArrowClick = () => {
    const currentIndex = CATEGORIES.findIndex(
      category => category.name === currentCategory,
    )
    const newIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length
    setCurrentCategory(CATEGORIES[newIndex].name)
  }

  const handleRightArrowClick = () => {
    const currentIndex = CATEGORIES.findIndex(
      category => category.name === currentCategory,
    )
    const newIndex = (currentIndex + 1) % CATEGORIES.length
    setCurrentCategory(CATEGORIES[newIndex].name)
  }

  return (
    <>
      <FlexBox
        direction=""
        justifyContent="space-around"
        alignItems="center"
        gap=""
        style={{position: 'relative'}}
      >
        <LeftArrow
          src="/images/left-arrow.png"
          alt="왼쪽 화살표"
          onClick={handleLeftArrowClick}
        />

        {CATEGORIES?.map(category => (
          <FlexBox
            direction="column"
            justifyContent=""
            alignItems="center"
            gap=""
            style={{
              marginTop: '120px',
              marginBottom: '100px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentCategory(category.name)}
            key={category.id}
          >
            <ImgBox
              active={currentCategory === category.name ? 'true' : ''}
              src={category.img}
              alt="category 이미지"
            />
            <Name active={currentCategory === category.name ? 'true' : ''}>
              {category.name}
            </Name>
          </FlexBox>
        ))}

        <RightArrow
          src="/images/right-arrow.png"
          alt="오른쪽 화살표"
          onClick={handleRightArrowClick}
        />
      </FlexBox>
    </>
  )
}

const LeftArrow = styled.img({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
})
const RightArrow = styled.img({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
})

const ImgBox = styled.img<{active: string}>(({active}) => ({
  borderRadius: '50%',
  border: active ? '1px solid #FE7156' : '1px solid white',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    border: '1px solid #FE7156',
  },
}))

const Name = styled(Typography)<{active: string}>(({active}) => ({
  marginTop: '15px',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '21.6px',
  color: active ? '#FE7156' : '#000000',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease-in-out',
}))
export default Category
