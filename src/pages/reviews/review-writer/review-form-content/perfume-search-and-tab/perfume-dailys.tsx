import {RadioGroup, styled} from '@mui/material'
import {REVIEW_OPTIONS} from '@pages/reviews/review-writer/data/review-options'
import RadioRoundedButton from '../../base/radio-rounded-button'
import ErrorMessage from '@components/base/error-message'
import SubTitle from '../../base/sub-title'
import useFormValidateReview from '../../hooks/use-form-validate-review'

const PerfumeDailys = () => {
  const {dayType} = useFormValidateReview()
  const {
    field,
    formState: {errors},
  } = dayType

  return (
    <section>
      <SubTitle title="보통 어떤 날에 뿌리나요?" />
      <CustomRadioGroup
        row
        aria-label="향수"
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      >
        {REVIEW_OPTIONS.dayTypes.map(dayType => (
          <RadioRoundedButton
            title={dayType.name}
            value={dayType.code}
            key={dayType.name}
          />
        ))}
      </CustomRadioGroup>
      <ErrorMessage errorMessage={errors.dayType?.message} />
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
