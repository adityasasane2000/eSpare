import React from 'react'

function UserCard() {
  return (
    <div className='bg-white w-[70%] rounded-2xl p-5 space-y-2 ml-[15%]'>
        <img className="w-[30%]" src='./male@2x.png'></img>
        <h3 className='font-semibold'>Sourav Joshi</h3>
        <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy</p>
    </div>
  )
}

export default UserCard