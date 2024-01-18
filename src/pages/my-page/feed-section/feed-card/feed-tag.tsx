import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material";

interface proptype {
  tags: string[]
}

const FeedTag = ({tags}: proptype) => {
  return (
    <FeedTagContainer>
      {tags.map((e,i)=><TagChip label={`#${e}`} key={i}/>)}
    </FeedTagContainer>
  )
}

export default FeedTag

const FeedTagContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  marginBottom:'11.3px',
  minHeight: '23px'
}))

const TagChip = styled(Chip)(({theme})=>({
  height: '23px',
  padding: '0',
  fontSize: theme.typography.body5.fontSize,
  color:theme.palette.grey[500],
  border: `solid 1px ${theme.palette.grey[400]}`,
  backgroundColor: '#fff',
  borderRadius: '8px',
}))
