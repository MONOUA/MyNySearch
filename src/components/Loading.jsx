import React from 'react'
import { PuffLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="flex justify-center items-center">
        <PuffLoader color="#00BFFF" height={550} width={80} />
    </div>
  )
}

export default Loading