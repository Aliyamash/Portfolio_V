import ProjectSection from "./ProjectSection";
import SkyNight from "./SkyNight";
import Sky from "./SkyNight";

export default function Projects () {
    return(
        <>
        <div>
          <ProjectSection/>
        </div>
      <div className="bg-black pb-96">
        <SkyNight/>
      </div>
        </>
    )
}