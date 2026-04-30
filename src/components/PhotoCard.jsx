import { Card } from '@heroui/react'
import Image from 'next/image'
import { FaRegStar } from 'react-icons/fa'




const PhotoCard = ({photo}) => {
    console.log(photo)
  return (
    <Card className=''>
        {/* <div className="border rounded-xl">
            <Image 
             src={photo.image}
             height={200}
             width={200}
             alt={photo.title}/>
           
        </div> */}
        <div className="">


             <div className="">
            <h2 className='font-medium text-blue-900 '>Title: {photo.title}</h2>
            <h3  className='font-medium text-blue-900 '>Mentor : {photo.instructor}</h3>
            <p className='font-sm text-blue-900'>Category : {photo.category}</p>

        </div>
              <div className="font-sm text-blue-900">
            <p>Duration : {photo.duration}</p>
             <div className="flex items-center gap-2"> 
            
            <p>Rating : {photo.rating}</p>
            <p className='text-yellow-500'>{<FaRegStar />}</p>
        </div>
        </div>
        </div>
       
      
       

    </Card>
  )
}

export default PhotoCard

