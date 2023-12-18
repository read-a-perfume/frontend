import {RadioGroup, styled} from '@mui/material'
import RadioRoundedButton from '../base/radio-rounded-button'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import {ReviewWriterFormProps} from '../types/review-writer.interface'
import ReviewFormSubTitle from '../base/review-form-sub-title'

interface IfPerfumeDurationsProps {
  formValues: ReviewWriterFormProps
  handleFormDataChange: (event: React.ChangeEvent) => void
}

const PerfumeDurations = ({
  formValues,
  handleFormDataChange,
}: IfPerfumeDurationsProps) => {
  return (
    <section>
      <ReviewFormSubTitle title="이 향수의 지속력은 어떤가요?" />
      <CustomRadioGroup
        row
        aria-label="향수"
        name="duration"
        value={formValues.duration}
        onChange={handleFormDataChange}
      >
        {REVIEW_OPTIONS.durations.map(duration => (
          <RadioRoundedButton title={duration.name} value={duration.code} />
        ))}
      </CustomRadioGroup>
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
