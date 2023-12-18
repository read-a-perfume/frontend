import {RadioGroup, styled} from '@mui/material'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import RadioRoundedButton from '../base/radio-rounded-button'
import {ReviewWriterFormProps} from '../types/review-writer.interface'
import ReviewFormSubTitle from '../base/review-form-sub-title'

interface IfPerfumeDailysProps {
  formValues: ReviewWriterFormProps
  handleFormDataChange: (event: React.ChangeEvent) => void
}

const PerfumeDailys = ({
  formValues,
  handleFormDataChange,
}: IfPerfumeDailysProps) => {
  return (
    <section>
      <ReviewFormSubTitle title="보통 어떤 날에 뿌리나요?" />
      <CustomRadioGroup
        row
        aria-label="향수"
        name="dayType"
        value={formValues.dayType}
        onChange={handleFormDataChange}
      >
        {REVIEW_OPTIONS.dayTypes.map(dayType => (
          <RadioRoundedButton title={dayType.name} value={dayType.code} />
        ))}
      </CustomRadioGroup>
    </section>
  )
}

export default PerfumeDailys

const CustomRadioGroup = styled(RadioGroup)({
  display: 'flex',
  justifyContent: 'space-between',
  '& .MuiFormControlLabel-root': {
    margin: 0,
  },
})
