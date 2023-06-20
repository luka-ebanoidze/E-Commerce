import { HomeContent } from "./HomeContent/HomeContent";
import { Navigation } from "@src/components/Navigation";
import { Slider } from "@src/components/Slider";


export default function HomeView() {
  return (
    <div className="bg-red-300 flex flex-col gap-5 py-10">
      <div className="flex gap-10 min-h-[500px] max-xl:flex-col max-xl:items-center">
        <Navigation />
        <Slider />
      </div>
      <div className="flex justify-center w-full">
        <HomeContent />
      </div>
    </div>
  );
}
