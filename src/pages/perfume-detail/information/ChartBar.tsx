import {useState, useEffect} from 'react'
import FlexBox from '@layouts/flex-box'

interface ProgressBarProp {
  percent: number
}

const ChartBar = ({percent}: ProgressBarProp) => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    let start = 0
    const end = 4 + (percent / 100) * 114

    const animate = () => {
      // 애니메이션 속도 조절
      start += (end - start) * 0.05
      setWidth(start)

      if (start < end) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [percent])

  return (
    <FlexBox alignItems="center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85.5"
        height="8"
        viewBox="0 0 122 8"
        fill="none"
      >
        <path
          d="M4 4H118"
          stroke="#F1F1F5"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d={`M4 4H${width}`}
          stroke={'#FE7156'}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </FlexBox>
  )
}

export default ChartBar
