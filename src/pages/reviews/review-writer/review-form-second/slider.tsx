import React from 'react'
import {Slider, useTheme} from '@mui/material'
import useReviewForm from '../hooks/use-review-form'

const marks = [
  {
    value: 0,
    label: '약함',
  },
  {
    value: 50,
    label: '보통',
  },
  {
    value: 100,
    label: '빠람',
  },
]

export default function SliderRating() {
  const [value, setValue] = React.useState(50)

  const handleChange = (_event: Event, newValue) => {
    setValue(newValue)
    handleSlider(newValue)
  }
  const {handleSlider} = useReviewForm()

  const theme = useTheme()

  return (
    <div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom"
        step={50}
        marks={marks}
        sx={{
          '&.MuiSlider-root': {
            color: '#eee',
            height: '2px',
          },
          '.MuiSlider-thumb::after': {
            width: '24px',
            height: '24px',
            border: `2px solid ${theme.palette.primary.main}`,
            background: '#fff',
          },

          '& span.MuiSlider-track': {
            height: '0px',
            color: `${theme.palette.primary.main}`,
          },
        }}
      />
    </div>
  )
}
