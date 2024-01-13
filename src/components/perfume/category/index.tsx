import React from 'react'
import {URLSearchParamsInit, useSearchParams} from 'react-router-dom'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box'
import {IfCategory} from 'types/perfume.interface'

import CustomIcons from '@assets/icons/custom-Icons'
import {Box, Skeleton, Stack, Typography} from '@mui/material'

interface IfCategoryProps {
  categories: IfCategory[] | undefined
  loading: boolean
  error: string | unknown
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
  searchParams?: URLSearchParamsInit
  setSearchParams?: React.Dispatch<React.SetStateAction<URLSearchParamsInit>>
  setCategoryId?: React.Dispatch<React.SetStateAction<number>>
  setDescription?: React.Dispatch<React.SetStateAction<string>>
  margin?: string
}

const isLoadingData = Array.from({length: 11}, (_, index) => index + 1)

const Category = ({
  categories,
  loading,
  error,
  currentCategory,
  setCurrentCategory,
  setCategoryId,
  setDescription,
  margin = '93px 0px',
}: IfCategoryProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('categoryId')

  const setQueryParams = (category: any) => {
    if (categories && category) {
      setCurrentCategory(category?.name)

      if (setDescription) {
        setDescription(category?.description)
      }

      setSearchParams({
        categoryId: category?.id,
      })

      setCategoryId && setCategoryId(category?.id)
    }
  }

  const handleLeftArrowClick = () => {
    if (categories) {
      const currentIndex = categories.findIndex(
        category => category.name === currentCategory,
      )
      const newIndex =
        (currentIndex - 1 + categories.length) % categories.length

      setQueryParams(categories[newIndex])
    }
  }

  const handleRightArrowClick = () => {
    if (categories) {
      const currentIndex = categories.findIndex(
        category => category.name === currentCategory,
      )
      const newIndex = (currentIndex + 1) % categories.length
      setQueryParams(categories[newIndex])
    }
  }

  if (error){
    console.log(error)
  }
  

  return (
    <Wrapper customStyle={margin}>
      <Box sx={{cursor: 'pointer'}} onClick={handleLeftArrowClick}>
        <CustomIcons.BeforeIcon />
      </Box>

      {loading ? (
        <>
          {isLoadingData.map((_, index) => (
            <Stack spacing={1} key={index}>
              <Skeleton
                sx={{bgcolor: 'grey.200'}}
                variant="circular"
                width={78}
                height={78}
                key={index}
              />
              <Skeleton height={25} />
            </Stack>
          ))}
        </>
      ) : (
        <>
          {categories?.length !== 0 &&
            categories?.map(category => (
              <FlexBox
                direction="column"
                alignItems="center"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setQueryParams(category)}
                key={category.id}
              >
                <Box sx={{width: 78}}>
                  <CategoryImg
                    clicked={
                      (query && query === String(category.id)) ||
                      (!query && currentCategory === category.name)
                        ? 'true'
                        : ''
                    }
                    src={category?.thumbnail}
                    alt="category 이미지"
                  />
                </Box>

                <CategoryName
                  fontFamily="Arita buri"
                  clicked={
                    (query && query === String(category.id)) ||
                    (!query && currentCategory === category.name)
                      ? 'true'
                      : ''
                  }
                >
                  {category.name}
                </CategoryName>
              </FlexBox>
            ))}
        </>
      )}

      <Box sx={{cursor: 'pointer'}} onClick={handleRightArrowClick}>
        <CustomIcons.AfterIcon />
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div<{customStyle: string}>(({customStyle}) => ({
  margin: customStyle,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative',
}))

const CategoryImg = styled.img<{clicked: string}>(({clicked}) => ({
  borderRadius: '50% !important',
  border: clicked ? '2px solid #FE7156' : '1px solid #F1F1F5',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  width: '78px',
  height: '78px',
  objectFit: 'cover',

  '&:hover': {
    border: '2px solid #FE7156',
  },
}))

const CategoryName = styled(Typography)<{clicked: string}>(({clicked}) => ({
  marginTop: '12px',
  fontWeight: '500',
  fontSize: '13.5px',
  lineHeight: 'noraml',
  color: clicked ? '#FE7156' : 'black',
  textTransform: 'uppercase',
  transition: 'all 0.1s ease',
}))

export default Category
