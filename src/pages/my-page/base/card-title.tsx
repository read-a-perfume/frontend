import {Typography, styled} from '@mui/material'
import { CustomThemeOptions } from '@theme/index.interface';

interface proptype {
  theme?: CustomThemeOptions
}

const CardTitle = styled(Typography)`
  font-family: Pretendard;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${({theme}:proptype)=>theme?.palette.grey['500']};
  margin-bottom: 24px;
`

export default CardTitle;

CardTitle.defaultProps = {
  variant: "h2",
}