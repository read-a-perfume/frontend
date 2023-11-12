import FlexBox from '@layouts/flex-box.js'
import React from 'react'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {theme} from '@theme/index.js'

interface PerfumeCharacteristicsProps {
  firstCategory?: string
  secondCategory?: string
  firstValue?: string
  secondValue?: string
}

const PerfumeCharacteristics: React.FC<PerfumeCharacteristicsProps> = ({
  firstCategory,
  secondCategory = '지속력',
  firstValue = '적당한 향',
  secondValue = '3시간-6시간',
}) => {
  return (
    <FlexBox direction="column" gap="12px">
      <InfoBox>
        {firstCategory ? (
          <BoxContent left={true}>
            <Categories>{firstCategory}</Categories>
            <Types color="#333">{firstValue}</Types>
          </BoxContent>
        ) : (
          <Content>
            <Types color="#333">{firstValue}</Types>
          </Content>
        )}
        <BoxContent left={false}>
          {secondCategory && <Categories>{secondCategory}</Categories>}
          <Types color="#333">{secondValue}</Types>
        </BoxContent>
      </InfoBox>
    </FlexBox>
  )
}

export default PerfumeCharacteristics

export const InfoBox = styled.div({
  width: '375px',
  height: '46px',
  borderRadius: '10px',
  background: '#F1F1F1',
  display: 'flex',
  alignItems: 'center',
})

export const BoxContent = styled.div(({left}: {left: boolean}) => ({
  width: '188px',
  borderRight: left ? '1px solid #BDBDBD' : 'none',
  paddingLeft: left ? '32px' : '28px',
  display: 'flex',
}))

export const Categories = styled(Typography)(
  ({color = '#949494'}: {color?: string}) => ({
    color: color,
    fontSize: theme.typography.body3.fontSize,
    fontWeight: 500,
  }),
)

export const Types = styled(Typography)({
  color: '#333',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  marginLeft: '16px',
})

const Content = styled.div({
  width: '50%',
  borderRight: '1px solid #BDBDBD',
  display: 'flex',
  justifyContent: 'center',
})
