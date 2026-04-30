import AllPopularCourses from "@/components/AllPopularCourses";
import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner/>

      <AllPopularCourses/>
    </div>
  );
}
