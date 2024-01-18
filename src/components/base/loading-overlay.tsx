import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

const LoadingOverlay = () => {
  /*
  //position absolute보단 fixed가 좋은 이유 ref로 세로높이 안구해도 됨
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const setContainerHeight = () => {
      if (containerRef.current) {
        const fullPageHeight = Math.max(
          document.documentElement.scrollHeight,
          window.innerHeight || document.documentElement.clientHeight,
        ) // height of <html>, 브라우저의 높이, 현재 보이는 영역의 세로 높이

        containerRef.current.style.height = `${fullPageHeight}px`
      }
    }

    setContainerHeight()

    
    window.addEventListener('resize', setContainerHeight)

    
    return () => {
      window.removeEventListener('resize', setContainerHeight)
    }
  }, [])
  */

  return <Container />
}

export default LoadingOverlay

const Container = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'gray',
  opacity: '0.5',
  width: '100%',
  height: '100vh',
  zIndex: 10,
  overflowX: 'hidden',
}))
