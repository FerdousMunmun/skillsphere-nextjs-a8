import { Button } from "@heroui/react"
import Link from "next/link"



const Navber = () => {
  return (
   <nav className="container mx-auto sticky top-0 z-40 w-full border-b border-separator ">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="font-bold text-6xl text-green-800">p<span className="font-black text-2xl text-blue-950 transform-rotatet-45">Knowledge</span></div>
    <ul className="flex items-center gap-4">
      <li className="font-semibold text-md text-blue-950"><Link href="#">Home</Link></li>
      <li className="font-semibold text-md text-blue-950"><Link href="#">Courses</Link></li>
      <li className="font-semibold text-md text-blue-950"><Link href="#">My Profile</Link></li>
    </ul>
    <div className=" flex gap-2 ">
         <Button className= "px-4 py-2 bg-green-200 text-blue-950">Login</Button>
    <Button className= "px-4 py-2 bg-green-200 text-blue-950">Logout</Button>
    </div>
   
  </header>
</nav>
  )
}

export default Navber