import Image from 'next/image'
import React from 'react'
import images from '../../images'
import { useState } from 'react'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {FaRegCircle ,FaCircle } from 'react-icons/fa'

const ImageSilder = () => {


  const [index, setIndex] = useState(0)

  const nextImage = () => {


    if (index == (images.length - 1)) {
      setIndex(0)
      return
    }

    setIndex((prev) => ++prev)


  

  }

  const prevImage = () => {


    if (index == 0) {
      setIndex(images.length - 1)
    } else {
      setIndex((prev) => --prev)
    }
  }

  return (
    <div className='w-full h-[60vh] bg-red-100 flex justify-center select-none'>
      <div className='w-1/3 h-[60vh] bg-red-500 relative '>
        <Image src={images[index]} layout='fill' alt='hello world' />
        <div className='text-4xl font-extrabold absolute top-[50%] right-0 hover:cursor-pointer' onClick={nextImage} >
          <BsFillArrowRightSquareFill/>
        </div>
        <div className='text-4xl font-extrabold absolute top-[50%] hover:cursor-pointer' onClick={prevImage} >
          <BsFillArrowLeftSquareFill />
        </div>
        
        <div className='absolute bottom-5  w-full flex gap-2 justify-center'>
              
             
            {images.map((x,i)=>
               index==i ? <div onClick={()=>setIndex(i)}> <FaCircle /></div> : <div onClick={()=>setIndex(i)}> <FaRegCircle /></div> 
            )}
            
        </div>
 
        
      </div>
    </div>
  )
}

export default ImageSilder