import React from 'react'

const Tabbtn = ({ active, selectTab, children}) => {
    const btnclasses = active ? 'text-white border-b border-blue-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${btnclasses}`}>
            {children}
        </p>

    </button>
        
  )
}

export default Tabbtn
