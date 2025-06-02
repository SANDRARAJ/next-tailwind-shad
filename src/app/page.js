import BannerContent from "@/components/BannerContent/BannerContent";
import CenterdEmbla from "@/components/CenterdEmbla/CenterdEmbla";
import Dropdown from "@/components/Dropdown/Dropdown";
import EmblaCarousel from "@/components/EmblaCarousal/EmblaCarousal";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Hotels from "@/components/Hotels/Hotels";
import HoverTabs from "@/components/HoverTabs/HoverTabs";
import Select from "@/components/Select/Select";
import SelectTab from "@/components/SelectTab/SelectTab";

export default function Home() {
  return (
    <>
      <main>
        <HomeBanner />
        <BannerContent />
        <SelectTab />
        <Hotels />
      </main>
    </>
  );
}
