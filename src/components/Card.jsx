import React from 'react';
import { PiFiles } from "react-icons/pi";
import { TbFileDownload } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import Add from './Add';

function Card({data, reference}) {
  return (
   <>
   <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} className=' flexwrap-shrink-0 m-2 relative w-60 h-72 rounded-[40px] bg-zinc-900 text-white overflow-hidden'>
        <PiFiles className='m-3 text-2xl' />
        <p className='text-sm leading-tight m-5  font-semibold '> {data.desc}</p>
        <div className='footer absolute bottom-0  w-full   left-0  '>
            <div className='flex items-center justify-between   mb-1 py-3 px-5 text-xl'>
                <h5>{data.fileSize}</h5>
                <span className='flex bg-zinc-200 w-7 h-7  rounded-full items-center justify-center'>
                    {data.close? <IoCloseOutline  color='#000' />:<TbFileDownload color='#000'/>}
                 </span>   
            </div>
            {data.tag.isOpen?(
              <div className={`tag w-full py-2 ${data.tag.tagColor} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            ):null}
        </div>
   </motion.div>
  
   </>
  )
}

export default Card