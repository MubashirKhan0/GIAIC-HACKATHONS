import Link from "next/link";
import Image from "next/image";
import sofa from "@/app/Pictures/Rocket single seater 1 (3).png";
import Table from "@/app/components/home/Table";
import Instagram from "./components/home/Instagram";
import Blog from "./components/home/Blog";
import Assgard from "./components/home/Assgard";
import TopPicks from "./components/Card/TopProducts";
import RocketSingleSeater from "./components/home/RocketSingleSeater";


export default function home() {
  return (
    <main>

        {/* Other Components */}
        <div className="w-full">
          <RocketSingleSeater />
        </div>
        <div className="w-full">
          <Table />
        </div>
        <div className="w-full">
          <TopPicks/>
          </div>
        <div className="w-full">
          <Assgard />
        </div>
        
        <div className="w-full">
          <Blog />
        </div>
        <div className="w-full">
          <Instagram />
        </div>
      
      
    </main>
  );
}
