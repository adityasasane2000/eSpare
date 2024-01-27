import React from 'react'

function AboutCard({title}) {
  return (
        <div className={`bg-white text-black rounded-xl w-[80%] text-sm p-5 space-y-5 flex flex-col`}>
            <img className="w-12" src="./Ellipse.png" alt="" />
            <h3 className='text-sm font-semibold'>{title}</h3>
        </div>
  )
}

export default AboutCard