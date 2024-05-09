import Image from "next/image";
import hosPBanner from '@/assets/image/banner.jpg'
const HomePage = () => {
  return(
    <>
       <div className="h-screen">
        <Image objectFit="cover" className="h-[680px]" loading = 'lazy' src={hosPBanner} alt="Banner"/>
       </div>
    </>
  )}
export default HomePage;