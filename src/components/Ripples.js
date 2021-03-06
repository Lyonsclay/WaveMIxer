import React from 'react'
import Wave from './Wave'
import Donut from './Donut'
import circles from './Circles'

const radius = (window.innerWidth > 500)? 200 : 100

const Ripples = ({colors, x, y}) =>  (
  <g>
    <defs>
      {colors.map((color, i) =>
        <Wave
          colors={colors}
          id={i + 'wave' + x + color + y}
          duration={10}
          delay={i * 1}
          key={i + color + y * x}
        />
       )}
    </defs>
    {circles(colors, x, y)}
    <Donut
      outRadius={radius}
      x={x - radius}
      y={y - radius}
    />
  </g>
)


export default Ripples
