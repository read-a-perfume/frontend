import {useState} from 'react'
import {Slider, useTheme} from '@mui/material'

const marks = [
  {
    value: 0,
    label: '약함 0%',
  },
  {
    value: 50,
    label: '보통 50%',
  },
  {
    value: 100,
    label: '강함 100%',
  },
]

export default function SliderRating() {
  const [value, setValue] = useState(50)

  const handleChange = (_event: Event, newValue) => {
    setValue(newValue)
  }

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
          '& span.MuiSlider-markLabel': {
            color: '#A9A9A9',
          },
          '& .MuiSlider-root': {
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
