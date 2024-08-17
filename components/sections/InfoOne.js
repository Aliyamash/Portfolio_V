
import cloud6 from "@/public/img/cloud-6.png";
import cloud7 from "@/public/img/cloud-7.png";
import Me from "../../components/about/Me";
import Image from "next/image";
export default function Info() {
  return (
    <>
      <div>
      <div className="relative">
 
        <Image src={cloud6}  className="opacity-100" />
      </div>
        <Me />
        <div className="flex ">
          <Image src={cloud7}  className="opacity-100" />
        </div>
      </div>
    </>
  );
}
