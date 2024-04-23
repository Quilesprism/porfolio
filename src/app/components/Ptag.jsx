import React from 'react'

const Ptag = ({ name, onClick, isSelected}) => {
  const btnS =  isSelected ? 'text-white border-blue-500' : 
  'text-[#ADB7BE] border-slate-600 hover:border-white'
    
  return (
    <button className={`${btnS} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default Ptag
