import AboutUs from "@/components/ui/AboutUs";
import Banner from "@/components/ui/Banner";
import CardBanner from "@/components/ui/CardBanner";
import Studies from "@/components/ui/Studies";
const HomePage = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Banner />
          <CardBanner />
        </div>
        <div className="md:mt-12 lg:mt-48 max-w-[1470px] mx-auto p-6 ">
          <AboutUs />
          <Studies/>
        </div>
      </div>
    </>
  );
};
export default HomePage;
