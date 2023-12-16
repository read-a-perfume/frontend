import {FormControl} from '@mui/material'
import PerfumeDurations from './perfume-durations'
import PerfumeSearch from './perfume-search'
import PerfumeDailys from './perfume-dailys'
import PerfumeStrengths from './perfume-strengths'
import PerfumeSeasons from './perfume-seasons'
import useReviewForm from '../hooks/use-review-form'

const ReviewFormSecond = () => {
  const {formValues, handleFormDataChange, handleAutoComplete} = useReviewForm()

  return (
    <>
      <FormControl component="fieldset">
        <PerfumeSearch handleAutoComplete={handleAutoComplete} />
        <PerfumeDailys
          formValues={formValues}
          handleFormDataChange={handleFormDataChange}
        />
        <PerfumeStrengths />
        <PerfumeDurations
          formValues={formValues}
          handleFormDataChange={handleFormDataChange}
        />

        <PerfumeSeasons
          formValues={formValues}
          handleFormDataChange={handleFormDataChange}
        />
      </FormControl>
    </>
  )
}

export default ReviewFormSecond
