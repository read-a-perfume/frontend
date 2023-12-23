import {useRouter} from '@hooks/use-router'
import {Button, styled} from '@mui/material'

const WriteButton = () => {
  const {routeTo} = useRouter()
  return (
    <_WriteButton
      variant="outlined"
      onClick={() => routeTo('/reviews/review-writer')}
    >
      리뷰 작성하기
    </_WriteButton>
  )
}

export default WriteButton

const _WriteButton = styled(Button)(({theme}) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 600,
  width: '178px',
  height: '54px',
}))
