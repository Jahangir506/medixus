import FirstFooter from "@/components/shared/FirstFooter";
import MiddleFooter from "@/components/shared/MiddleFooter";
import LastFooter from "@/components/shared/lastFooter";
import AboutUs from "@/components/ui/AboutUs";
import Banner from "@/components/ui/Banner";
import CardBanner from "@/components/ui/CardBanner";
import Studies from "@/components/ui/Studies";
import { LastPage } from "@mui/icons-material";
const HomePage = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Banner />
          <CardBanner />
        </div>
        <div className="my-0">
          <AboutUs />
          <Studies />
        </div>
        <div className="bg-[#346BAE] text-white">
          <div className="border-b border-slate-400">
            <FirstFooter />
          </div>
          <div>
            <MiddleFooter/>
          </div>
        </div>
        <div className="bg-[#3164A3] text-white py-6">
          <LastFooter/>
        </div>
      </div>
    </>
  );
};
export default HomePage;
