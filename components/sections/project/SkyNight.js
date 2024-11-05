import Image from "next/image";
import Sky from "@/public/img/khalifetower.jpg";
import ProjectSection from "./ProjectSection";

export default function SkyNight() {
  return (
    <>
      <div>
        <div>
          <ProjectSection />
        </div>
        <div>
          <Image src={Sky} className="object-fit h-full w-full" />
        </div>
      </div>
    </>
  );
}
