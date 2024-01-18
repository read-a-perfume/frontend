import FlexBox from '@layouts/flex-box.js'
import React from 'react'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'
import {theme} from '@theme/index.js'

interface PerfumeCharacteristicsProps {
  firstCategory?: string
  secondCategory?: string
  firstValue?: string
  secondValue?: string
  width?: string
}

const PerfumeCharacteristics: React.FC<PerfumeCharacteristicsProps> = ({
  firstCategory,
  secondCategory = '지속력',
  firstValue = '적당한 향',
  secondValue = '3시간-6시간',
  width = '526px',
}) => {
  return (
    <FlexBox direction="column" gap="12px">
      <InfoBox width={width}>
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

export const InfoBox = styled("div")<{width: string}>(({width}) => ({
  width,
  height: '46px',
  borderRadius: '10px',
  background: '#F1F1F1',
  display: 'flex',
  alignItems: 'center',
}))

export const BoxContent = styled("div")(({left}: {left: boolean}) => ({
  width: '75%',
  borderRight: left ? '1px solid #BDBDBD' : 'none',
  paddingLeft: left ? '32px' : '13px',
  display: 'flex',
}))

export const Categories = styled(Typography)(
  ({color = '#949494'}: {color?: string}) => ({
    color: color,
    fontSize: theme.typography.body4.fontSize,
    fontWeight: 500,
  }),
)

export const Types = styled(Typography)({
  color: '#333',
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  marginLeft: '16px',
})

const Content = styled("div")({
  width: '50%',
  borderRight: '1px solid #BDBDBD',
  display: 'flex',
  justifyContent: 'center',
})
