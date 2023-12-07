import {Box, Button, styled} from '@mui/material'

interface ReviewFormPreNextProps {
  handleNextPage: () => void
  handlePrevPage: () => void
  prograss: number
}

const ReviewFormPreNext = ({
  handleNextPage,
  handlePrevPage,
  prograss,
}: ReviewFormPreNextProps) => {
  return (
    <Box sx={{display: 'flex', gap: '10px', marginTop: '20px'}}>
      {prograss === 0 && (
        <BaseButton
          sx={{
            width: '100%',
          }}
          onClick={handleNextPage}
        >
          다음으로
        </BaseButton>
      )}
      {prograss > 0 && prograss < 2 && (
        <>
          <BaseButton onClick={handlePrevPage} sx={{width: '156px'}}>
            이전
          </BaseButton>
          <BaseButton onClick={handleNextPage} sx={{width: '252px'}}>
            다음으로
          </BaseButton>
        </>
      )}
      {prograss === 2 && (
        <>
          <BaseButton onClick={handlePrevPage} sx={{width: '156px'}}>
            이전
          </BaseButton>
          <BaseButton type="submit" sx={{width: '252px'}}>
            리뷰 업로드
          </BaseButton>
        </>
      )}
    </Box>
  )
}

export default ReviewFormPreNext
const BaseButton = styled(Button)({
  height: '56px;',
  display: ' flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  backgroundColor: '#f1f1f5',
})
