import {Checkbox, FormControlLabel, Typography, styled} from '@mui/material'
import {REVIEW_OPTIONS} from '../../data/review-options'
import {useWatch} from 'react-hook-form'
import ErrorMessage from '@components/base/error-message'
import useFormValidateReview from '../../hooks/use-form-validate-review'


const PerfumeKeywords = ({title}: {title: string}) => {
  const {keywordMethods, control} = useFormValidateReview()

  const {
    field: {ref, value, onChange, ...inputProps},
    formState: {errors},
  } = keywordMethods

  const checkboxIds = useWatch({control: control, name: 'keywords'}) || []
  const handleChange = value => {
    const newArray = [...checkboxIds]

    const item = value

    if (newArray.length > 0) {
      const index = newArray.findIndex(x => x === item)

      if (index === -1) {
        newArray.push(item)
      } else {
        newArray.splice(index, 1)
      }
    } else {
      newArray.push(item)
    }
    onChange(newArray)
  }

  return (
    <>
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{display: 'block', marginBottom: '16px'}}
      >
        {title}
      </Typography>
      <Group>
        {REVIEW_OPTIONS.keywords.map(item => (
          <MuIFormControlLabel
            sx={{
              margin: 0,
            }}
            control={
              <CustomCheckBox
                checked={value?.some(checked => checked === item['code'])}
                {...inputProps}
                onChange={() => handleChange(item['code'])}
                value={item['code']}
                inputRef={ref}
                // key={item.name}
                // name={item.name}
              />
            }
            key={item['name']}
            label={item['name']}
          />
        ))}
      </Group>
      <ErrorMessage errorMessage={errors.keywords?.message} />
    </>
  )
}

export default PerfumeKeywords

const Group = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: '32px',
})

const MuIFormControlLabel = styled(FormControlLabel)`
  .MuiCheckbox-root {
    display: none;
  }
  .MuiFormControlLabel-label {
    display: inline-flex;
    padding: 5px 16px;
    border-radius: 17px;
    border: 2px solid #dfdfdf;
    background: #fff;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    font-size: 14px;
    color: #a9a9a9;
    margin: 0;
  }

  &.MuiCheckbox-root.Mui-checked + span {
    border-color: #fe7156 !important;
    color: #fe7156;
  }
`
const CustomCheckBox = styled(Checkbox)({
  '.MuiCheckbox-root': {
    display: 'none',
  },
  '&.Mui-checked + span': {
    borderColor: '#fe7156 ',
    color: ' #fe7156;',
  },
  '&.MuiCheckbox-root + span': {
    fontWeight: 500,
  },
})
