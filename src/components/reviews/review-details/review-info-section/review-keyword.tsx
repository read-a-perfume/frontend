import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'

interface IfProps {
  title: string
}

const ReviewKeyword = ({title}: IfProps) => {
  return (
    <ViewReviewPerfuemKeyword>
      <Typography variant="body3" fontStyle={{color: '#a9a9a9'}}>
        {title}
      </Typography>
    </ViewReviewPerfuemKeyword>
  )
}

export default ReviewKeyword

const ViewReviewPerfuemKeyword = styled(Box)({
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  padding: '4px 8px',
  borderRadius: '8px',
  border: ' solid 1px #dbdbdb',
  cursor: 'pointer',
  '&:before': {
    content: '"#"',
    fontSize: '14px',
    color: '#a9a9a9',
  },
})
