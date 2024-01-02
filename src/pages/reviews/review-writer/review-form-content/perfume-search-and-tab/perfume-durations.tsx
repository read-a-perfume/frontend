import {RadioGroup, styled} from '@mui/material'
import RadioRoundedButton from '../../base/radio-rounded-button'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import ErrorMessage from '@components/base/error-message'
import SubTitle from '../../base/sub-title'
import useFormValidateReview from '../../hooks/use-form-validate-review'

const PerfumeDurations = () => {
  const {duration} =useFormValidateReview()
  const {
    field,
    formState: {errors},
  } = duration

  return (
    <section>
      <SubTitle title="이 향수의 지속력은 어떤가요?" />
      <CustomRadioGroup
        row
        aria-label="향수"
        name="duration"
        value={field.value}
        onChange={field.onChange}
      >
        {REVIEW_OPTIONS.durations.map(duration => (
          <RadioRoundedButton title={duration.name} value={duration.code} />
        ))}
      </CustomRadioGroup>
      <ErrorMessage errorMessage={errors.duration?.message} />
    </section>
  )
}

export default PerfumeDurations

const CustomRadioGroup = styled(RadioGroup)({
  display: 'flex',
  justifyContent: 'space-between',
  '& .MuiFormControlLabel-root': {
    margin: 0,
  },
})
