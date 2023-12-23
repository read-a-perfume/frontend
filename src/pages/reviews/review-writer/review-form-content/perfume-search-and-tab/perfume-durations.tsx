import {RadioGroup, styled} from '@mui/material'
import RadioRoundedButton from '../../base/radio-rounded-button'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import ReviewFormSubTitle from '../../base/review-form-sub-title'
import useGetCustomForms from '../../hooks/use-get-custom-forms'
import ErrorMessage from '@components/base/error-message'

const PerfumeDurations = () => {
  const {duration} = useGetCustomForms()
  const {
    field,
    formState: {errors},
  } = duration
  console.log(errors, '듀레이션')
  return (
    <section>
      <button type="submit">출출</button>
      <ReviewFormSubTitle title="이 향수의 지속력은 어떤가요?" />
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
