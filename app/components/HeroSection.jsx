"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const downloadCV = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1kBQFcsj-YNM-mdpDnsZ2Cf_lfOPJHyYz';
  }

const HeroSection = () => {

    const contactMe = () => {
        const phone = '081226207944';
        window.open(`https://wa.me/${phone}`, '_blank');
      }
    
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text- from-lime-400 via-emerald-500 to-teal-700'>
                        Hai, I'm {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Ligar Arnata',
                            1000,
                            'Web Developer',
                            1000,
                            'Android Developer',
                            1000,
                            'UI/UX Designer',
                            1000
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                    Undergraduate Informatics Student at ITS Surabaya | Aspiring Front-End Developer
                </p>
                <div>
                    <button onClick={contactMe} className='px-6 py-3 w-full sm:w-fit rounded-full mt-6 mr-4 bg-gradient-to-br from-lime-400  via-emerald-500 to-teal-700 hover:bg-white text-white'>
                        Contact Me
                    </button>
                    <button onClick={downloadCV} className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-700 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5'>
                    <Image
                        src = "/images/imageabout.png"
                        alt='foto'
                        className='mt-5'
                        width={300}
                        height={300}
                    />
            </div>
        </div>
    </section>
  )
}

export default HeroSection