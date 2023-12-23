import {Input, Typography, styled} from '@mui/material'
import useGetCustomForms from '../../hooks/use-get-custom-forms'
import ErrorMessage from '@components/base/error-message'

const ShortReview = ({title}: {title: string}) => {
  const {shortReview} = useGetCustomForms()
  const {
    field,
    formState: {errors},
  } = shortReview

  return (
    <>
      <OneLineReview>
        <Typography
          variant="body3"
          sx={{display: 'block', fontWeight: '600', marginBottom: '16px'}}
        >
          {title}
        </Typography>
        <OneLineReviewInput
          name="shortReview"
          placeholder="한줄평을 남겨주세요."
          value={field.value}
          onChange={field.onChange}
        />
        <ErrorMessage errorMessage={errors.shortReview?.message} />
      </OneLineReview>
    </>
  )
}

export default ShortReview

const OneLineReview = styled('div')({
  marginBottom: '13px',
})

const OneLineReviewInput = styled(Input)(({theme}) => ({
  width: '100%',
  borderRadius: '10px',
  border: '1px solid #EDEDED',

  boxSizing: 'border-box',
  ...theme.typography.body5,
  input: {
    padding: '10px 20px',
  },
  '&::before': {
    display: 'none',
  },
  '&::after': {
    display: 'none',
  },
}))
