import {RadioGroup, styled} from '@mui/material'
import RadioRoundedButton from '../base/radio-rounded-button'
import { IfPerfumeReviewFormBaseProps } from '../types/review-writer.interface' 
import ReviewFormSubTitle from '../base/review-form-sub-title'
import {REVIEW_OPTIONS} from '@pages/reviews/data/review-options'
const PerfumeSeasons = ({
  formValues,
  handleFormDataChange,
}: IfPerfumeReviewFormBaseProps) => {
  return (
    <section>
      <ReviewFormSubTitle title="어떤 계절하고 잘 어울린다고 생각하나요?" />
      <CustomRadioGroup
        row
        aria-label="향수"
        name="season"
        value={formValues.season}
        onChange={handleFormDataChange}
      >
        {REVIEW_OPTIONS.seasons.map(season => (
          <RadioRoundedButton title={season.name} value={season.code} />
        ))}
      </CustomRadioGroup>
    </section>
  )
}

export default PerfumeSeasons

const CustomRadioGroup = styled(RadioGroup)({
  display: 'flex',
  justifyContent: 'space-between',
  '& .MuiFormControlLabel-root': {
    margin: 0,
  },
})
