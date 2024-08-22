import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CardVideo from '../components/CardVideo'
import Choice from '../components/Choice'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { modalStore } from '../store/ModalStore'
import { AnimatePresence } from 'framer-motion'



export default function Homepage() {

  const isVisible=modalStore((set)=>set.isVisible)
  const open=modalStore((set)=>set.open)
  const visible=localStorage.getItem('isVisible')
  const handleOpen = () => {
    const timer =  setTimeout(() => {
         open()
     }, 10000)
      return () => clearTimeout(timer);
 }

 useEffect(()=>{
  if(visible){
    handleOpen()
  }
  
 },[])
  return (
    <>
    
    <section className='h-[100%]  overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-900'>
      <AnimatePresence>


      
    {isVisible && <Modal/>}
    </AnimatePresence>
      
    <Header/>
      <Hero/>
      <CardVideo width="86%" height="590px" url="https://www.youtube.com/watch?v=JuxZVrQU-i8"/>
      <Choice/>
      <Footer/>
    </section>
      
    </>
  )
}
