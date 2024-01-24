import TextareaAutosize from '@mui/material/TextareaAutosize'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import ErrorMessage from '@components/base/error-message'
import useFormValidateReview from '../../hooks/use-form-validate-review'

const FullReview = ({title}: {title: string}) => {
  const {fullReview} = useFormValidateReview()
  const {
    field,
    formState: {errors},
  } = fullReview

  return (
    <div>
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{display: 'block', marginBottom: '16px'}}
      >
        {title}
      </Typography>
      <AutoSizer
        aria-label="minimum height"
        {...field}
        required={true}
        minRows={3}
        maxLength={200}
        placeholder="이 향수를 사용하면서 느낀 특징과 매력을 설명해주세요. 특유의 향과 향수의 노트들에 대해 느낀 점이나 어떤 면이 인상적이었는지에 대해 언급해주시면 좋습니다."
      />
      <ErrorMessage errorMessage={errors.fullReview?.message} />
    </div>
  )
}

export default FullReview
const AutoSizer = styled(TextareaAutosize)({
  width: '411px',
  height: '205px !important',
  marginBottom: '32px',
  padding: 20,
  borderRadius: '10px',
  border: 'solid 1px #ededed',
})
