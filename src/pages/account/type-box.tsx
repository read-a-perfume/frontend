import styled from '@emotion/styled'
import {Typography} from '@mui/material'

const myTypes = ['fruity', 'wood', 'spicy']

const TypeBox = () => {
  return (
    <Box>
      {myTypes.map(type => (
        <div
          key={type}
          style={{
            gap: 7.74,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src="/src/pages/perfumes/images/fruity.png"
            style={{width: 57, height: 57}}
          />
          <Type>{type}</Type>
        </div>
      ))}
    </Box>
  )
}

export default TypeBox

const Box = styled.div({
  width: '100%',
  height: 103,
  borderRadius: 10,
  border: '1px solid #EDEDED',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
})

const Type = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: 14,
  fontWeight: '500',
})
