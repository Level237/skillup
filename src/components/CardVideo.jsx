import React from 'react'
import ReactPlayer from 'react-player'

export default function CardVideo({width,height,url}) {
  return (
    <div className='flex justify-center mt-[-68px]'>
      <ReactPlayer
      width={width}
      height={height}
      playing={true}
        url={url}
      />
    </div>
  )
}
