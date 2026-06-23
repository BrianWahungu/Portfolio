import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

// FIX: Destructured { isDarkMode } so dark mode icons render correctly
const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
             <Image src={isDarkMode ? assets.mail_icon_dark: assets.mail_icon} alt='Mail icon' className='w-6'/>
             brianwahungu123@gmail.com 
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Brian Wahungu. All Rights Reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
              <a target='_blank' rel="noopener noreferrer" href="https://github.com/BrianWahungu">
                GitHub
              </a>
            </li>
            <li>
              {/* UPDATED: Your new LinkedIn profile link */}
              <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/brian-wahungu-9387093ba/">
                LinkedIn
              </a>
            </li>
            <li>
              {/* UPDATED: Your new Instagram link */}
              <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/wahungubrian/">
                Instagram
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer