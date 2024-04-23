"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const handleDownload = () => {

      const pdfUrl = '/pdf/profile.pdf';
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = window.URL.createObjectURL(new Blob([blob]));

          const tempLink = document.createElement('a');
          tempLink.href = blobUrl;
          tempLink.setAttribute('download', 'profile.pdf'); 
          tempLink.click();
        })
        .catch(error => {
          console.error('Error al descargar el PDF:', error);
        });
};
  
  
const HeroSection = () => (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-300'>¡Hola! </span>
                <br></br>
                <TypeAnimation
                sequence={[ 
                    'Soy', 
                    200,
                    'Quiles Gonzalez',
                    200,
                    'Desarrollador web',
                    200
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                />
            <br></br>
            </h1>
            <p className='text-[#ADB7DE text-base sm:text-lg mb-6 lg:text-xl'>
                Soy un apacionado programador y amante del aprendizaje.
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-white-200 to-blue-400 hover:bg-slate-200 text-white'>Sobre mi</button>
                <button
                className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br bg-transparent hover:bg-gray-800 text-white border border-white mt-3'
                onClick={handleDownload}
            >
                Descargar CV
            </button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-5 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                    {/* <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    /> */}
                </div>    
            </div>
        </div>
    </section>
)

export default HeroSection
