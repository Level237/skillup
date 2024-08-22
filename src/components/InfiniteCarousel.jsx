
import React, { useEffect, useState } from 'react'

import useMeasure from "react-use-measure"
import {motion,animate,useMotionValue} from "framer-motion"
import CardVideo from './CardVideo';

export default function InfiniteCarousel() {

    const images=[
        "https://www.youtube.com/watch?v=22zbEJM1CPA",
        "https://www.youtube.com/watch?v=Vl0ISjD5ejQ",
        "https://www.youtube.com/watch?v=j7BXkz27bqk",
        "https://www.youtube.com/watch?v=F7ZPcOZUhGg",
        "https://www.youtube.com/watch?v=BLxMeCFfVq4",
        "https://www.youtube.com/watch?v=k2YVR_GVa2I",
        "https://www.youtube.com/watch?v=k2YVR_GVa2I",
        "https://www.youtube.com/watch?v=k2YVR_GVa2I",
    ]
    const  FAST_DURATION=15;
    const SLOW_DURATION=75

    const [duration,setDuration]=useState(FAST_DURATION)
    console.log(duration);
    let [ref,{width}]=useMeasure()
    const xTranslation=useMotionValue(0)
    const [mustFinish,setMustFinish]=useState(false);
    const [rerender,setRerender]=useState(false)
    useEffect(()=>{
        let controls;
        let finalPosition=-width/2 - 8;
        
        if(mustFinish){
            controls=animate(xTranslation,[xTranslation.get(),finalPosition],{
                ease:"linear",
                duration:duration * (1 -xTranslation.get()/finalPosition),
                onComplete:()=>{
                    setMustFinish(false);
                    setRerender(!rerender)
                }
            })
        }else{
            controls=animate(xTranslation,[0,finalPosition],{
                ease:'linear',
                duration:duration,
                repeat:Infinity,
                repeatType:"loop",
                repeatDelay:0
            })
        }

        //return controls?.stop;
    },[xTranslation,width,duration,rerender])
  return (
    <main className='py-8'>
        
 <motion.div className='relative mt-16 left-0 flex gap-4' ref={ref} style={{ x:xTranslation }}
 onHoverStart={()=>{
    setMustFinish(true)
    setDuration(SLOW_DURATION)}}
 onHoverEnd={()=>{
    setMustFinish(true)
    setDuration(FAST_DURATION)}}>
     {[...images,...images].map((item,id)=>(
        <CardVideo key={id} width={250} height={250} url={item}/>
     ))}
    </motion.div>
    </main>
   
  )
}