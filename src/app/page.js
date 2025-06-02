import CenterdEmbla from "@/components/CenterdEmbla/CenterdEmbla";
import Dropdown from "@/components/Dropdown/Dropdown";
import EmblaCarousel from "@/components/EmblaCarousal/EmblaCarousal";
import HoverTabs from "@/components/HoverTabs/HoverTabs";
import Select from "@/components/Select/Select";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-[1200px] mx-auto">
        <div className="py-10">
          <Select />
        </div>
        <div className="py-10">
          <Dropdown />
        </div>
        <div className="py-10">
          <EmblaCarousel />
        </div>
        <div className="py-10">
          <HoverTabs />
        </div>
        <div className="py-10">
          <CenterdEmbla />
        </div>
      </main>
    </div>
  );
}
