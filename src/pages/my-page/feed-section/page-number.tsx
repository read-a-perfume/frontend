import styled from '@emotion/styled'
import {Box, Typography} from '@mui/material'
import {CustomThemeOptions} from '../../../theme/index.interface'

interface proptype {
  number: number
  active: boolean
}

interface stylePropType {
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

const NumberCotainer = styled(Box)`
  width: 40px;
  height: 43px;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, ...props}: stylePropType) =>
    props.active ? theme?.palette.grey[400] : theme?.palette.grey[200]};
  
`
const NumberText = styled(Typography)`
  font-family: Pretendard;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #000;
`
