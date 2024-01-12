import {Typography, styled} from '@mui/material'
import {useContext} from 'react'
import {IfCategory} from 'types/perfume.interface'
import {FormCategoryDataType, getDefaultValues} from './util/util'
import {TypeContext} from '../../profile-type'
import {FormProvider, useForm} from 'react-hook-form'
import usePostCategory from './hook/use-post-category'
import CardContainer from './card-container'
import ButtonContainer from './button-container'
interface proptype {
  allType: IfCategory[]
}

const TypeModalContent = ({allType}: proptype) => {
  const {data: curType} = useContext(TypeContext)

  const methods = useForm<FormCategoryDataType>({
    defaultValues: getDefaultValues(allType, curType),
  })

  const {onSubmit} = usePostCategory()

 

  return (
    <>
      <Bar>마이 타입</Bar>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CardContainer data={allType}/>
          <ButtonContainer/>
        </form>
      </FormProvider>
    </>
  )
}

export default TypeModalContent

const Bar = styled(Typography)(({theme}) => ({
  height: '67.4px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: 'solid 1px #101010',
  fontSize: theme.typography.body1.fontSize,
}))


//1.17143
