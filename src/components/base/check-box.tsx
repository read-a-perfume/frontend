import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {createSvgIcon} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {getFontSize} from '../../hooks/useGetFonts.js'

interface CheckBoxProps {
  isChecked: boolean
  onClick: (value: boolean, name: string) => void
  label: string
  gap: string
  name: string
  fontSize?: 'sm' | 'md' | 'lg'
  marginBottom?: string
  subText?: string
  isRequired?: boolean
  isOptional?: boolean
  color?: string
  style?: React.CSSProperties
}

const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  onClick,
  label,
  gap,
  name,
  fontSize = 'md',
  marginBottom = '0px',
  isRequired = false,
  isOptional = false,
  subText = '',
  style,
}) => {
  const [size, setSize] = useState<'12px' | '14px' | '16px'>('14px')

  useEffect(() => {
    setSize(getFontSize(fontSize))
  }, [fontSize])

  const CheckedIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M9.85742 18.8569C14.828 18.8569 18.8574 14.8275 18.8574 9.85693C18.8574 4.88637 14.828 0.856934 9.85742 0.856934C4.88686 0.856934 0.857422 4.88637 0.857422 9.85693C0.857422 14.8275 4.88686 18.8569 9.85742 18.8569Z"
        fill="#131313"
      />
    </svg>,
    'CheckedIcon',
  )

  const NotCheckedIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.85742 18.8569C14.828 18.8569 18.8574 14.8275 18.8574 9.85693C18.8574 4.88637 14.828 0.856934 9.85742 0.856934C4.88686 0.856934 0.857422 4.88637 0.857422 9.85693C0.857422 14.8275 4.88686 18.8569 9.85742 18.8569Z"
        stroke="#E7E7E7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    'NotCheckedIcon',
  )

  const clickHandler = () => {
    onClick(!isChecked, name)
  }

  const Labels = (
    <Label htmlFor={name} size={size}>
      {label}
    </Label>
  )

  return (
    <FlexBox alignItems="center" gap={gap} style={{marginBottom, ...style}}>
      {isChecked ? (
        <button onClick={clickHandler}>
          <CheckedIcon />
        </button>
      ) : (
        <button onClick={clickHandler}>
          <NotCheckedIcon />
        </button>
      )}
      <FlexBox gap="4px" alignItems="center">
        {label ? Labels : null}
        {subText ? <SubText>{subText}</SubText> : null}
        {isRequired && <Essential>(필수)</Essential>}
        {isOptional && <Optional>(선택)</Optional>}
      </FlexBox>
    </FlexBox>
  )
}

const Label = styled.label(({size}: {size: '12px' | '14px' | '16px'}) => ({
  fontSize: size,
}))

const Essential = styled.span({
  fontSize: '10px',
  fontWeight: '500',
  color: '#FE7156',
})

const Optional = styled.span({
  fontSize: '10px',
  fontWeight: '500',
  color: '#B4B4B4',
})

const SubText = styled.span({
  fontSize: '12px',
  fontWeight: '500',
  color: '#B4B4B4',
})

export default CheckBox
