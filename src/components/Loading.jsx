import React from 'react'
import { ClockLoader } from 'react-spinners';

function Loading() {
  return (
    <div>
        <ClockLoader color='grey' size={50} />
        <p>loading...</p>
    </div>
  )
}

export default Loading