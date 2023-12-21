import {TextareaAutosize, Typography, styled} from '@mui/material'
import useGetCustomForms from '../hooks/use-get-custom-forms'
import ErrorMessage from '@components/base/error-message'

const FullReview = ({title}: {title: string}) => {
  const {fullReview} = useGetCustomForms()
  const {
    field,
    formState: {errors},
  } = fullReview

  return (
    <div>
      <Typography
        variant="body3"
        sx={{display: 'block', fontWeight: '600', marginBottom: '16px'}}
      >
        {title}
      </Typography>
      <AutoSizer
        aria-label="minimum height"
        name={field.name}
        minRows={3}
        value={field.value}
        onChange={field.onChange}
        placeholder="이 향수를 사용하면서 느낀 특징과 매력을 설명해주세요. 특유의 향과 향수의 노트들에 대해 느낀 점이나 어떤 면이 인상적이었는지에 대해 언급해주시면 좋습니다."
        style={{width: 411, height: 205, marginBottom: '32px', padding: 20}}
      />
      <ErrorMessage errorMessage={errors.fullReview?.message} />
    </div>
  )
}

export default FullReview
const AutoSizer = styled(TextareaAutosize)({
  width: 411,
  height: 205,
  marginBottom: '32px',
  padding: 20,
})
