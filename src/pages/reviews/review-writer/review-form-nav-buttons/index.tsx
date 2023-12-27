import MuiButton from '@components/base/mui-button'
import {Box} from '@mui/material'

interface ReviewFormPreNextProps {
  handleNextPage: () => void
  handlePrevPage: () => void
  prograss: number
}

const ReviewFormNavButtons = ({
  handleNextPage,
  handlePrevPage,
  prograss,
}: ReviewFormPreNextProps) => {
  return (
    <Box sx={{display: 'flex', gap: '10px', marginTop: '20px'}}>
      {prograss === 0 && (
        <MuiButton
          handleClick={handleNextPage}
          width="100%"
          title="다음으로"
          type="primary"
          height="56px"
        />
      )}
      {prograss > 0 && prograss < 2 && (
        <>
          <MuiButton
            handleClick={handlePrevPage}
            width="156px"
            title="이전"
            type="white"
            height="56px"
          />
          <MuiButton
            handleClick={handleNextPage}
            width="252px"
            height="56px"
            title="다음으로"
            type="grey"
          />
        </>
      )}
      {prograss === 2 && (
        <>
          <MuiButton
            handleClick={handlePrevPage}
            width="156px"
            title="이전"
            type="white"
            height="56px"
          />
          <MuiButton
            width="252px"
            height="56px"
            title="업로드"
            type="primary"
            formType="submit"
          />
        </>
      )}
    </Box>
  )
}

export default ReviewFormNavButtons
