import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {EmotionJSX} from 'node_modules/@emotion/react/dist/declarations/types/jsx-namespace.js'
import FlexBox from '@layouts/flex-box.js'

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  placeholderColor?: string
  width?: string
  height?: string
  backgroundColor?: string
  borderColor?: string
  color?: string
  borderDirection?: 'all' | 'bottom'
  fontSize: 'sm' | 'md' | 'lg'
  paddingHorizontal?: string
  endAdornment?: EmotionJSX.Element
  style?: React.CSSProperties
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  placeholderColor = 'white',
  width = '100%',
  height = '40px',
  backgroundColor = 'white',
  borderColor = 'white',
  borderDirection = 'all',
  color = '#191919',
  fontSize,
  style,
  endAdornment,
  paddingHorizontal = '0px',
}) => {
  const [size, setSize] = useState<'12px' | '14px' | '16px'>('12px')

  useEffect(() => {
    switch (fontSize) {
      case 'sm':
        setSize('12px')
        break
      case 'md':
        setSize('14px')
        break
      case 'lg':
        setSize('16px')
        break
    }
  }, [fontSize])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const hasEndAdornment = endAdornment ? true : false

  return (
    <>
      {!endAdornment ? (
        <TextInput
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          color={color}
          borderDirection={borderDirection}
          fontSize={size}
          paddingHorizontal={paddingHorizontal}
          hasEndAdornment={hasEndAdornment}
          value={value}
          onChange={changeHandler}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          style={{...style}}
        />
      ) : (
        <FlexBox alignItems="center" justifyContent="flex-start">
          <TextInput
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            color={color}
            borderDirection={borderDirection}
            fontSize={size}
            paddingHorizontal={paddingHorizontal}
            hasEndAdornment={hasEndAdornment}
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
            placeholderColor={placeholderColor}
            style={{...style}}
          />
          <div
            style={{
              position: 'absolute',
              marginTop: 5,
              right: paddingHorizontal,
            }}
          >
            {endAdornment}
          </div>
        </FlexBox>
      )}
    </>
  )
}

const TextInput = styled.input(
  ({
    width,
    height,
    backgroundColor,
    borderColor,
    color,
    borderDirection,
    fontSize,
    placeholderColor,
    paddingHorizontal,
    hasEndAdornment,
  }: {
    width: string
    height: string
    backgroundColor: string
    borderColor: string
    borderDirection: 'all' | 'bottom'
    fontSize: '12px' | '14px' | '16px'
    placeholderColor: string
    paddingHorizontal: string
    color: string
    hasEndAdornment: boolean
  }) => ({
    width,
    height,
    backgroundColor,
    fontSize,
    color,
    borderRadius: 10,
    borderBottom:
      borderDirection === 'bottom' ? `1px solid ${borderColor}` : '',
    '&::placeholder': {
      color: placeholderColor,
    },
    paddingLeft: paddingHorizontal,
    paddingRight: hasEndAdornment
      ? Number(paddingHorizontal.slice(0, paddingHorizontal.length - 2)) + 32
      : paddingHorizontal,
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${borderColor}`,
    outline: '1px solid #fff',
  }),
)

// const TextInput = styled.input(
//   ({
//     width,
//     height,
//     borderColor,
//     backgroundColor,
//     color,
//     size,
//   }: {
//     width: string
//     height: string
//     borderColor: string
//     backgroundColor: string
//     color: string
//     size: '12px' | '14px' | '16px'
//   }) => ({
//     width: width ? width : '100%',
//     height,
//     backgroundColor,
//     color,
//     fontWeight: size === '14px' ? '400' : '500',
//     fontSize: size,
//     border: `1px solid ${borderColor}`,
//     borderRadius: '10px',
//     '&::placeholder': {
//       fontSize: '12px',
//     },
//   }),
// )

export default Input
