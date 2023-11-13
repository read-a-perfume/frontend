import React from 'react'
import styled from '@emotion/styled'

const BoxLayout = ({children}: {children: React.ReactNode}) => {
  return <Box>{children}</Box>
}

export default BoxLayout

const Box = styled.div({
  minWidth: 512,
  height: 380,
  borderRadius: 15,
  border: '1px solid #DBDBDB',
  background: 'white',
})
