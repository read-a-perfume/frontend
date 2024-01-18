import Chip from "@mui/material/Chip";
import { styled } from "@mui/material";
import {ShowBenchmarkType} from '../feed-section/type'

interface proptype {
  reference: ShowBenchmarkType
  benchmark: ShowBenchmarkType
  onClick: React.MouseEventHandler<HTMLDivElement>
  label: string
}

const FeedChip = ({reference, benchmark, label, onClick}: proptype) => {
  
  return (
    <_FeedChip
      active={benchmark === reference}
      label={label}
      onClick={onClick}
      clickable={benchmark !== reference}
    />
  )
}

export default FeedChip

const _FeedChip = styled(Chip)<{active: boolean}>(({theme, active}) => ({
  margin: '0 28px 0 0',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.6',
  textAlign: 'left',
  color: `${active ? '#fff' : '#a9a9a9'}`,
  padding: '12px 0',
  height: '30px',
  backgroundColor: `${active ? theme.palette.primary.main : theme.palette.grey[200]}`,
}))
