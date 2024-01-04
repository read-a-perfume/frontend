import Loading from '@components/base/loading'
import {Box, styled} from '@mui/material'
import {ReactNode, Suspense} from 'react'

interface proptype {
  children?: ReactNode
}

const ListArea = ({children}: proptype) => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Container>
  )
}

export default ListArea

const Container = styled(Box)<{height?: string | number}>(
  ({height = '80vh'}) => ({
    width: '1200px',
    height: height,
  }),
)
