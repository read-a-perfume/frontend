import React from 'react'
import {Slider} from '@mui/material'

const marks = [
  {
    value: 0,
    label: '느림',
  },
  {
    value: 50,
    label: '보통',
  },
  {
    value: 100,
    label: '빠름',
  },
]

export default function SliderRating() {
  const [value, setValue] = React.useState(50)

  const handleChange = (event, newValue) => {
    console.log(event)
    setValue(newValue)
  }

  return (
    <div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom"
        step={50}
        marks={marks}
      />
    </div>
  )
}
