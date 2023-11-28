import {Chip, styled} from '@mui/material'

interface proptype {
  active: boolean
}

const FeedChip = styled(Chip)`
  margin-right: 28px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: ${({...props}: proptype) => (props.active ? '#fff' : '#a9a9a9')};
  padding: 12px 0 12px 0;
  height: 42px;
  background-color: ${({...props}: proptype) =>
    props.active ? '#fe7156' : ''};
`

export default FeedChip
