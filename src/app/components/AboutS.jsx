"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import Tabbtn from './Tabbtn';

const data = [{
  title: "Skills",
  id: "skills",
  content:(
    <ul className='list-disc pl-2'>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Django</li>
      <li>NodeJS</li>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>Git</li>
    </ul>
  )},
  {
    title: "Educacion",
    id: "educacion",
    content:(
      <ul className='list-disc pl-2'>
        <li>Universidad Distrital Francisco Jose De Caldas</li>
        <li>SENA</li>
      </ul>
  )},
  {
    title: "Experiencia",
    id: "experiencia",
    content:(
      <ul className='list-disc pl-2'>
        <li>Desarrollador Web - Enlace Global Internacional SAS</li>
      </ul>
  )}

]


const about = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) =>{
    startTransition(() => {
      setTab(id)
    })
  }

  return ( 
  <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image 
      src='/images/img-p.jpg'
      alt='img-p'
      width={500}
      height={500}>
    </Image>
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
      <h2 className='text-4xl font-bold text-white mb-4'>Sobre mi</h2>
      <p className='text-base lg:text-lg'>Estudiante de programación apasionado por la tecnología y el
      desarrollo de software. Poseo sólidos conocimientos en lenguajes
      de programación como Python, Java, Javascript, etc                                                                                                   . Soy una
      persona creativa, autodidacta y orientada a resultados, con
      habilidades analíticas y de resolución de problemas. Busco
      oportunidades para seguir aprendiendo y creciendo en el campo de
      la programación.
      </p>
      <div className='flex flex-row justify-start mt-8'>
        <Tabbtn selectTab={() => 
          handleTabChange("skills")}
           active={tab === "skills"}>
           {" "} Skills {" "}
        </Tabbtn>
        <Tabbtn selectTab={() => 
          handleTabChange("educacion")}
           active={tab === "educacion"}>
            {" "} Educación {" "}
        </Tabbtn>
        <Tabbtn selectTab={() => 
          handleTabChange("experiencia")}
           active={tab === "experiencia"}>
            {" "} Experiencia {" "}
        </Tabbtn>
      </div>
      <div className='mt-8'>{data.find((t) => t.id === tab).content}</div>
    </div>
    </div>
    </section>
  )
}

export default about
