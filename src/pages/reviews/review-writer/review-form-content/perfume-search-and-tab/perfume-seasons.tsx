import {RadioGroup, styled} from '@mui/material'
import RadioRoundedButton from '../../base/radio-rounded-button'
import ReviewFormSubTitle from '../../base/review-form-sub-title'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import useGetCustomForms from '../../hooks/use-get-custom-forms'
import ErrorMessage from '@components/base/error-message'
const PerfumeSeasons = () => {
  const {season} = useGetCustomForms()
  const {
    field,
    formState: {errors},
  } = season
  console.log(errors.season, '시즌')
  return (
    <section>
      <ReviewFormSubTitle title="어떤 계절하고 잘 어울린다고 생각하나요?" />
      <CustomRadioGroup
        row
        aria-label="향수"
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      >
        {REVIEW_OPTIONS.seasons.map(season => (
          <RadioRoundedButton title={season.name} value={season.code} />
        ))}
      </CustomRadioGroup>
      <ErrorMessage errorMessage={errors.season?.message} />
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
