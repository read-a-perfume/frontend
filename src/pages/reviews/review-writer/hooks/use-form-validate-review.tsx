import {useController, useFormContext} from 'react-hook-form'
import {IfReviewRequest} from 'types/review.interface'
import reviwFormValidation from '../utils/review-form-validation'

//useForm 커스텀
const useFormValidateReview = () => {
  const {control} = useFormContext<IfReviewRequest>()

  const thumbnails = useController({
    name: 'thumbnails', // defaultsvalues 저장한 객체 키
    control,
    //규칙
  })

  const dayType = useController({
    name: 'dayType', // defaultsvalues 저장한 객체 키
    control,
    //규칙
    rules: {
      ...reviwFormValidation.dayType,
    },
  })
  const duration = useController({
    name: 'duration',
    control,
    rules: {
      ...reviwFormValidation.duration,
    },
  })

  const season = useController({
    name: 'season',
    control,
    rules: {
      ...reviwFormValidation.season,
    },
  })

  const perfume = useController({
    name: 'perfume',
    control,
    rules: {
      ...reviwFormValidation.perfume,
    },
  })

  const strength = useController({
    name: 'strength',
    control,
  })

  const shortReview = useController({
    name: 'shortReview',
    control,
    rules: {
      ...reviwFormValidation.shortReview,
    },
  })

  const fullReview = useController({
    name: 'fullReview',
    control,
  })

  const keywordMethods = useController({
    name: 'keywords',
    control,
    defaultValue: [],
    rules: {
      validate: item => {
        return item.length <= 3 || '(최대 3개).'
      },
    },
  })

  return {
    thumbnails,
    dayType,
    duration,
    season,
    strength,
    perfume,
    shortReview,
    fullReview,
    keywordMethods,
    control,
  }
}

export default useFormValidateReview
