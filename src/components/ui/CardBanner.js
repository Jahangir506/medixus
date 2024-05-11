import Image from "next/image";
import doctorLogo from "@/assets/doctor-logo.png";
import carLogo from "@/assets/car-logo.png";
import calanderLogo from "@/assets/calander-logo.png";

const CardBanner = () => {
  return (
    <>
      <div className="sm:max-w-[770px] lg:max-w-[1470px] md:mt-12 p-6 lg:absolute -bottom-44 left-52 mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-3  gap-4">
        <div className="bg-[#346BAE] text-white flex px-8 py-16 rounded-lg">
            <Image
              src={doctorLogo}
              alt="Qualified Doctors"
              className="h-10 w-14"
            />
            <div className="ml-5 ">
              <h2 className="text-3xl">Qualified Doctors</h2>
              <div className="border-b w-10 mt-5 mb-2"></div>
              <p>
                Experienced and devoted doctors are ready to help you with your
                problems.
              </p>
            </div>
          </div>
          <div className="bg-[#3D7DCC] text-white flex px-8 py-16 rounded-lg">
            <Image
              src={carLogo}
              alt="Qualified Doctors"
              className="h-10 w-14 "
            />
            <div className="ml-5 ">
              <h2 className="text-3xl">Emergency Care</h2>
              <div className="border-b w-10 mt-5 mb-2"></div>
              <p>
              We are always ready to help when you need urgent help! Our emergency team is here for you!
              </p>
            </div>
          </div>
          <div className="bg-[#00BCD1] text-white flex px-8 py-16 rounded-lg">
            <Image
              src={calanderLogo}
              alt="Qualified Doctors"
              className="h-10 w-14"
            />
            <div className="ml-5 ">
              <h2 className="text-3xl">24-Hour Service</h2>
              <div className="border-b w-10 mt-5 mb-2"></div>
              <p>
              Anytime you need help, you may contact us and our receptionist will make an appointment for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardBanner;
