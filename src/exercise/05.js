// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, className = '', style, ...otherProps}) {
  return (
    <div
      className={`box ${className} ${size ? `box--${size}` : ''}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        orange box
      </Box>
    </div>
  )
}

export default App
