import Image from "next/image";
import hosPBanner from '@/assets/image/banner.jpg'
import { Button, Stack } from "@mui/material";

const Banner = () => {
    return(
        <>
        <div className="relative">
         <Image className="h-[470px] md:h-[350px] lg:h-[800px]" loading = 'lazy' src={hosPBanner} alt="Banner"/>
         <div className="bg-white/90 rounded-xl px-4 md:px-10 lg:px-14 py-10 md:py-8 lg:py-20 absolute top-7 md:top-14  left-0 lg:top-36 md:left-5 lg:left-52 text-center md:text-center lg:text-start mx-6">
            <h5>Welcome to Medixus hospital</h5>
            <h1 className="text-4xl md:text-3xl lg:text-5xl mt-7 mb-8 md:mb-6 lg:mb-12">The best specialists of the <br className="md:hidden lg:block"/> city expect you</h1>
            <Stack direction='row' className="flex-col gap-4 md:flex-row md:justify-center gap-y-5 lg:justify-start">
                <Button className="bg-[#00BCD1]  w-72 lg:w-60 md:max-w-xl lg:mx-0  mx-auto hover:bg-[#346BAE] py-4  text-white">MAKE APPOINTMENT</Button>
                <Button className="outline outline-1 py-4 w-56 md:w-32 lg:w-36 md:ml-0 lg:ml-0 mx-auto hover:bg-[#00BCD1] hover:text-white">DEPARTMENTS</Button>
            </Stack>
         </div>
        </div>
     </>
    )}
export default Banner;