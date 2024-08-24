
import cloud6 from "@/public/img/cloud-4.png";
import cloud7 from "@/public/img/cloud-7.png";
import Me from "../../components/about/Me";
import Image from "next/image";

export default function Info() {

  return (
    <>
      <div>
        <Me />
        <div className="">
          <Image src={cloud7}  className="opacity-100" />
        </div>
      </div>
    </>
  );
}
