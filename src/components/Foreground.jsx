import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref= useRef(null);
  const data =[
  {
    desc:"This the first card",
    fileSize:".9mb",
    close:true,
    tag:{isOpen:true, tagTitle:"Download Now", tagColor:"bg-green-600"},
  },
  {
    desc:"This the second card",
    fileSize:".7mb",
    close:false,
    tag:{isOpen:true, tagTitle:"Download Now", tagColor:"bg-blue-600"},
  },
  {
    desc:"This the third card",
    fileSize:".8mb",
    close:true,
    tag:{isOpen:false, tagTitle:"Download Now", tagColor:"bg-blue-600"},
  },
  {
    desc:"This the fourth card",
    fileSize:".5mb",
    close:false,
    tag:{isOpen:false, tagTitle:"Download Now", tagColor:"bg-green-600"},
  },]
  
  return (
    <>
    <div ref={ref} className='flex fixed top-0 left-0 z-[3] w-full h-full bg-transparent flex-wrap '>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
    </>
  )
}

export default Foreground