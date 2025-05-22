"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import Ptag from './Ptag'


const Pdata = [
    {
        id: 1,
        title: "Tienda online",
        description: "Tienda de tecnología online.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Quilesprism/ProyectoSena.git",
        previewUrl: "https://github.com/Quilesprism/ProyectoSena.git"
    },
    {
        id: 2,
        title: "Limpieza de datos",
        description: "Limpieza de datos para Excel especificos.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Quilesprism/Clean_web",
        previewUrl: "https://github.com/Quilesprism/Clean_web"
    },
    {
        id: 3,
        title: "Proyecto de graduación",
        description: "Integración de un sistema de visualización de grafos para la representación estadística de trayectorias de aprendizaje de juegos matemáticos",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Quilesprism/Juegos-matematicos",
        previewUrl: "https://github.com/Quilesprism/Juegos-matematicos"
    }
    

]

const Projects = () => {
    const [tag, setTag]= useState("All")
    const tagC = (newTag) => {
        setTag(newTag)
    }
    const filterData = Pdata.filter((project) => project.tag.includes(tag) )


  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>
        Mis proyectos
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
            <Ptag onClick={tagC} name="All" isSelected={tag === "All"} />   
            <Ptag onClick={tagC} name="Web" isSelected={tag === "Web"} />   
            <Ptag onClick={tagC} name="Mobile" isSelected={tag === "Mobile"} />   
        </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filterData.map(
        (project)=> 
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        tags={project.tag}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
        )}
        </div>
    </>
  )
}

export default Projects
