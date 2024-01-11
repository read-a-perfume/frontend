import {Box, Typography, styled} from '@mui/material'
import {IfCategory} from 'types/perfume.interface'
import CustomCheck from './custom-check'
import useCategoryForms from './hook/use-category-forms'
import {useWatch} from 'react-hook-form'
import {useRef} from 'react'

interface proptype {
  data: IfCategory
}

const TypeCard = ({data}: proptype) => {
  const id = data.id
  const {category, getValues, control} = useCategoryForms(id)

  
  const flag = useWatch({
    control: control,
    name: String(id) as never,
  }) as boolean

  const checkRef = useRef<HTMLInputElement | null>(null)
  
  const ableClick = (): boolean => {
    const allData = getValues()
    const cnt = Object.values(allData).filter(e => e === true).length
    if (cnt >= 3) {
      return false
    }
    return true
  }

  const handleChange = () => {
    // category.field.onChange(!e.target.checked)
    // console.log(e)
    category.field.onChange(!flag)
  }

  const handleClick = () => {
    if (!flag && !ableClick()) {
      alert('타입은 최대 3개까지 설정 가능합니다.')
    } else {
      checkRef.current?.click()
    }
  }

  return (
    <Container onClick={handleClick}>
      <input
        type="checkbox"
        hidden
        {...category.field}
        id={String(id)}
        name={category.field.name}
        ref={e => {
          category.field.ref(e)
          checkRef.current = e
        }}
        onChange={handleChange}
      />
      <TypeImage src={data.thumbnail} alt={data.name} />
      {<CustomCheck flag={flag} />}
      <Title>{data.name}</Title>
    </Container>
  )
}

export default TypeCard

const Container = styled(Box)(() => ({
  width: '128.1px',
  height: '153.7px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  position: 'relative',
  backgroundColor: '#bbb',
  zIndex: 0,
  cursor: 'pointer',
}))

const TypeImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  // filter: 'brightness(0.5)',
}))

const Title = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.h4.fontSize,
  fontFamily: 'AritaBuri',
  color: '#fff',
  zIndex: 1,
}))
