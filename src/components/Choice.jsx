import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import { LucideBrain } from 'lucide-react'
import InfiniteCarousel from './InfiniteCarousel'

export default function Choice() {
  return (
    <section>



<div className='flex mt-16 gap-6 items-center flex-col justify-center'>
<h1 className='text-5xl max-w-[46rem] text-center font-bold text-white'>Pourquoi choisir <span className="self-center  font-semibold whitespace-nowrap text-white">Skill</span><span className='text-[#f6ea0b] self-center  font-semibold whitespace-nowrap'>Up</span></h1>

<div className='grid grid-cols-2 gap-x-8 gap-y-6'>
<div className='p-4 bg-[#f6ea0b] flex gap-3 justify-center items-center'>
<div className='rounded-[100%] bg-black px-2 text-white'>1</div>
<p class="max-w-2xl  font-light text-black  md:text-lg lg:text-md">Formation Terre à Terre</p>
</div>
<div className='p-4 bg-[#f6ea0b] flex gap-3 justify-center items-center'>
  <div className='rounded-[100%] bg-black px-2 text-white'>2</div>
<p class="max-w-2xl  font-light text-black  md:text-lg lg:text-md">Apprentissage Flexible</p>
</div>
<div className='p-4 bg-[#f6ea0b] flex gap-3 justify-center items-center'>
  <div className='rounded-[100%] bg-black px-2 text-white'>3</div>
<p class="max-w-2xl  font-light text-black  md:text-lg lg:text-md">Contenu de qualité</p>
</div>
<div className='p-4 bg-[#f6ea0b] flex gap-3 justify-center items-center'>
  <div className='rounded-[100%] bg-black px-2 text-white'>4</div>
<p class="max-w-2xl  font-light text-black  md:text-lg lg:text-md">Encouragement à l'autonomie</p>
</div>
</div>
      <h1 className='text-4xl mt-6 max-w-[35rem] text-center font-bold text-white'>Monetiser votre compétence grace à la méthode SkillCat</h1>
      <p class="max-w-2xl  font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

    </div>

<div className='flex justify-center mt-12 gap-4  items-center'>
        <Card className="bg-black   border-none rounded-xl">
          <CardHeader className="flex flex-col items-center">
            <h2 className='text-white text-sm font-bold'>Formation 100% en ligne</h2>
          </CardHeader>
        </Card>
        <div><h2 className='text-white text-sm font-bold'>+</h2></div>
        <Card className="bg-black   border-none rounded-xl">
          <CardHeader className="flex flex-col items-center">
            <h2 className='text-white text-sm font-bold'>Cas Pratique</h2>
          </CardHeader>
        </Card>
        <div><h2 className='text-white text-sm font-bold'>+</h2></div>
        <Card className="bg-black   border-none rounded-xl">
          <CardHeader className="flex flex-col items-center">
            <h2 className='text-white text-sm font-bold'>Cadeau suprise</h2>
          </CardHeader>
        </Card>
      </div>
      <div>
        <InfiniteCarousel/>
      </div>
      <div className='flex gap-5 items-center flex-col justify-center'>
        <button className='bg-[#f6ea0b] px-4 py-2 rounded font-bold' onClick={() => console.log("Primary")}>
          Souscrire maintenant
        </button>
        
      </div>
    </section>
   
  )
}
