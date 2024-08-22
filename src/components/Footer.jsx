import { Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
   

<footer class="mx-[-200px] mt-16 rounded-lg shadow bg-black m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-center gap-5">
            <a href="/" class="flex items-center mb-4 sm:mb-0  rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Skill</span><span className='text-[#f6ea0b] self-center text-2xl font-semibold whitespace-nowrap'>Up</span>
            </a>
            <ul class="flex gap-6 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li className='cursor-pointer'>
                    <Facebook className='text-[#f6ea0b]'/>
                </li>
                <li className='cursor-pointer'>
                    <Instagram className='text-[#f6ea0b]'/>
                </li>
                <li className='cursor-pointer'>
                    <Youtube className='text-[#f6ea0b]'/>
                </li>
                
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">SkillUp™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
