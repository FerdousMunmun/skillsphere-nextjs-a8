import PhotoCard from "./PhotoCard"


const AllPopularCourses = async () => {
    const res = await fetch('https://skillsphere-nextjs-a8.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos)
  return (
    <div className="container mx-auto mt-6">
        <h2 className='font-bold text-2xl text-blue-950 text-center'>All Popular Courses</h2>
        <div className="grid grid-cols-3 gap-6">
          {
            photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>
              
              )
          }
        </div>
        </div>
  )
}

export default AllPopularCourses