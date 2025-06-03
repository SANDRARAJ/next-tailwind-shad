import BannerContent from "@/components/BannerContent/BannerContent";
import Contact from "@/components/Contact/Contact";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Hotels from "@/components/Hotels/Hotels";
import HoverTabs from "@/components/HoverTabs/HoverTabs";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import SelectTab from "@/components/SelectTab/SelectTab";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <HomeBanner />
        <BannerContent />
        <SelectTab />
        <Hotels />
        <HoverTabs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
