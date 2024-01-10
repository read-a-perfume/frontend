import {useController, useFormContext} from 'react-hook-form'
import {FormCategoryDataType} from '../util/util'

const useCategoryForms = (id: number) => {
  const {control, getValues} = useFormContext<FormCategoryDataType>()

  const category = useController({name: String(id) as never, control})

  return {category, control, getValues}
}

export default useCategoryForms
