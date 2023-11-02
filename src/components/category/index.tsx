import React from 'react'
import styled from '@emotion/styled'

import {Typography} from '@mui/material'
import categoryImg1 from '../../pages/perfumes/images/fruity.png'

import FlexBox from '@layouts/flex-box'
import CustomIcons from '@assets/icons/custom-Icons'

const CATEGORIES = [
  {
    id: '0',
    img: categoryImg1,
    name: 'fruity',
  },
  {
    id: '1',
    img: categoryImg1,
    name: 'woody',
  },
  {
    id: '2',
    img: categoryImg1,
    name: 'green',
  },
  {
    id: '3',
    img: categoryImg1,
    name: 'spicy',
  },
  {
    id: '4',
    img: categoryImg1,
    name: 'animal',
  },
  {
    id: '5',
    img: categoryImg1,
    name: 'citrus',
  },
  {
    id: '6',
    img: categoryImg1,
    name: 'light',
  },
  {
    id: '7',
    img: categoryImg1,
    name: 'musk',
  },
  {
    id: '8',
    img: categoryImg1,
    name: 'heavy',
  },
]

interface ICategory {
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}

const Category = ({currentCategory, setCurrentCategory}: ICategory) => {
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
    <div>
      <FlexBox
        direction=""
        justifyContent="space-between"
        alignItems="center"
        gap=""
        style={{position: 'relative'}}
      >
        <CustomIcons.BeforeIcon
          style={{marginRight: 36, cursor: 'pointer'}}
          onClick={handleLeftArrowClick}
        />

        {CATEGORIES.map(category => (
          <FlexBox
            direction="column"
            justifyContent=""
            alignItems="center"
            gap=""
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setCurrentCategory(category.name)}
            key={category.id}
          >
            <CategoryImg
              clicked={currentCategory === category.name ? 'true' : ''}
              src={category.img}
              alt="category 이미지"
            />
            <CategoryName
              clicked={currentCategory === category.name ? 'true' : ''}
            >
              {category.name}
            </CategoryName>
          </FlexBox>
        ))}
        <CustomIcons.AfterIcon
          style={{marginLeft: 36, cursor: 'pointer'}}
          onClick={handleRightArrowClick}
        />
      </FlexBox>
    </div>
  )
}

const CategoryImg = styled.img<{clicked: string}>(({clicked}) => ({
  borderRadius: '50%',
  border: clicked ? '1px solid #FE7156' : '1px solid #F1F1F5',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    border: '1px solid #FE7156',
  },
}))

const CategoryName = styled(Typography)<{clicked: string}>(({clicked}) => ({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  marginTop: '16px',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '21.6px',
  color: clicked ? '#FE7156' : 'black',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease-in-out',
}))

export default Category
