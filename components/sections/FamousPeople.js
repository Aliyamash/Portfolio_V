import Image from "next/image";
import BrendanEich from "@/public/img/BrendanEich.png";
import jadi from "@/public/img/jadi.png";
export default function FamousPeople() {
  return (
    <>
      {/* Comments2 */}
      <div className="mb-24 mt-36 text-center text-2xl capitalize">
        <h2>And I am eager to hear the opinion of these loved ones</h2>
      </div>
      <div className="flex flex-col mx-4 lg:flex-row gap-8 my-24 justify-center">
        <div>
          <Image
            src={BrendanEich}
            className="famousPic1 rounded-2xl shadow-2xl shadow-gray-700"
            height={120}
            alt="berdan"
          />
        </div>
        <div >
          <Image
            src={jadi}
            className="famousPic2 rounded-2xl shadow-2xl shadow-gray-700 "
            height={120}
            alt="jadi"
          />
        </div>
      </div>
    </>
  );
}
