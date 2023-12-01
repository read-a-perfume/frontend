import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import {CustomThemeOptions} from '../../../theme/index.interface'

interface proptype {
  number: number
  active: boolean
}

interface styleProptype {
  active: boolean
  theme?: CustomThemeOptions
}

const PageNumber = ({number, active}: proptype) => {
  return (
    <NumberCotainer active={active}>
      <NumberText variant="body2">{number}</NumberText>
    </NumberCotainer>
  )
}

export default PageNumber

const NumberCotainer = styled(Button)`
  width: 40px;
  height: 43px;
  background-color: ${({theme, ...props}: styleProptype) =>
    props.active ? theme?.palette.grey[400] : theme?.palette.grey[200]};
  min-width: 40px;
  color: #000;
  &:hover {
    background-color: ${({theme}: styleProptype) =>
    theme?.palette.grey[300]};
  }
`
const NumberText = styled(Typography)`
  font-family: Pretendard;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
 
`
