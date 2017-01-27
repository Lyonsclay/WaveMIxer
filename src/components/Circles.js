import React from 'react'

const width = window.innerWidth
const height = window.innerHeight
const radius = (i) => Math.hypot(width, height) + ((i % 2)? 0 : 50)
const id = (x, y, i, color) => i + 'wave' + x + color + y
const blur = (i, n) => (i == n - 1)? 'url(#blur)' : 'url(#spotlight)'

const circles = (colors, x, y, r, n = colors.length) => colors.map((color, i) => 
  <circle
    cx={x}
    cy={y}
    r={200}
    fill={`url(#${id(x, y, i, color)})`}
    key={x/y + i + color}
  />
)

export default circles
