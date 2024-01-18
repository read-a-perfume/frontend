import RadioGroup from '@mui/material/RadioGroup'
import styled from '@mui/material/styles/styled'
import RadioRoundedButton from '../../base/radio-rounded-button'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import ErrorMessage from '@components/base/error-message'
import SubTitle from '../../base/sub-title'
import useFormValidateReview from '../../hooks/use-form-validate-review'

const PerfumeSeasons = () => {
  const {season} = useFormValidateReview()
  const {
    field,
    formState: {errors},
  } = season
  console.log(errors.season, '시즌')
  return (
    <section>
      <SubTitle title="어떤 계절하고 잘 어울린다고 생각하나요?" />
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
