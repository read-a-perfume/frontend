import CustomIcons from '@assets/icons/custom-Icons.js'
import FlexBox from '@layouts/flex-box.js'
import React from 'react'
import styled from '@emotion/styled'

interface BottomNavigationProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  lastPage: number
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  page,
  setPage,
  lastPage,
}) => {
  return (
    <FlexBox
      justifyContent="center"
      style={{marginBottom: 78, width: window.innerWidth}}
    >
      <FlexBox gap="16px" alignItems="center">
        <div
          style={{cursor: 'poitner'}}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }}
        >
          <CustomIcons.BeforeIcon />
        </div>
        {lastPage <= 10 &&
          new Array(lastPage).fill(0).map((_, i) => {
            if (page === i + 1) {
              return <CurrentItem key={i}>{i + 1}</CurrentItem>
            } else {
              return (
                <DefaultItem key={i} onClick={() => setPage(i + 1)}>
                  {i + 1}
                </DefaultItem>
              )
            }
          })}
        {lastPage > 10 &&
          new Array(lastPage).fill(0).map((_, i) => {
            if (
              [1, 2, 3, lastPage, lastPage - 1, lastPage - 2].includes(i + 1)
            ) {
              if (page === i + 1) {
                return <CurrentItem key={i}>{i + 1}</CurrentItem>
              } else {
                return (
                  <DefaultItem key={i} onClick={() => setPage(i + 1)}>
                    {i + 1}
                  </DefaultItem>
                )
              }
            } else if (i + 1 === 4) {
              return (
                <FlexBox alignItems="flex-end" style={{cursor: 'pointer'}}>
                  ...
                </FlexBox>
              )
            }
          })}
        <div
          style={{cursor: 'poitner'}}
          onClick={() => {
            if (page < lastPage) {
              setPage(page + 1)
            }
          }}
        >
          <CustomIcons.AfterIcon />
        </div>
      </FlexBox>
    </FlexBox>
  )
}

export default BottomNavigation

const DefaultItem = styled.div({
  height: 43,
  width: 40,
  backgroundColor: '#F1F1F5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
})

const CurrentItem = styled.div({
  height: 43,
  width: 40,
  backgroundColor: '#D9D9D9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
})
