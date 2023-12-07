import React from 'react'
import {URLSearchParamsInit, useSearchParams} from 'react-router-dom'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box'
import {CategoryNameType} from './interfaces'

import CustomIcons from '@assets/icons/custom-Icons'
import {Box, Skeleton, Stack, Typography} from '@mui/material'

interface CategoryProps {
  categories: CategoryNameType[] | undefined
  loading: boolean
  error: string | unknown
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
  searchParams?: URLSearchParamsInit
  setSearchParams?: React.Dispatch<React.SetStateAction<URLSearchParamsInit>>
  setCategoryId?: React.Dispatch<React.SetStateAction<number>>
  setDescription?: React.Dispatch<React.SetStateAction<string>>
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
}: CategoryProps) => {
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

  console.log(error)

  return (
    <Wrapper>
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
                gap=""
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setQueryParams(category)}
                key={category.id}
              >
                {category.thumbnail ? (
                  <CategoryImg
                    clicked={
                      (query && query === String(category.id)) ||
                      (!query && currentCategory === category.name)
                        ? 'true'
                        : ''
                    }
                    src={category.img}
                    alt="category 이미지"
                  />
                ) : (
                  <>
                    {(query && query === String(category.id)) ||
                    (!query && currentCategory === category.name) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="78"
                        viewBox="0 0 78 78"
                        fill="none"
                      >
                        <circle
                          cx="39"
                          cy="39"
                          r="38.625"
                          fill="white"
                          stroke="#FE7156"
                          strokeWidth="0.75"
                        />
                        <circle cx="39" cy="39" r="36" fill="#F1F1F5" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="78"
                        viewBox="0 0 78 78"
                        fill="none"
                      >
                        <circle
                          cx="39"
                          cy="39"
                          r="38.625"
                          fill="white"
                          stroke="#EDEDED"
                          strokeWidth="0.75"
                        />
                        <circle cx="39" cy="39" r="36" fill="#F1F1F5" />
                      </svg>
                    )}
                  </>
                )}

                <CategoryName
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

const Wrapper = styled.div({
  margin: '93px 0px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative',
})

const CategoryImg = styled.img<{clicked: string}>(({clicked}) => ({
  borderRadius: '50%',
  border: clicked ? '1px solid #FE7156' : '1px solid #F1F1F5',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  width: '78px',
  height: '78px',

  '&:hover': {
    border: '1px solid #FE7156',
  },
}))

const CategoryName = styled(Typography)<{clicked: string}>(({clicked}) => ({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  marginTop: '12px',
  fontWeight: '500',
  fontSize: '13.5px',
  lineHeight: 'noraml',
  color: clicked ? '#FE7156' : 'black',
  textTransform: 'uppercase',
  transition: 'all 0.1s ease',
}))

export default Category
