import Image from "next/image";
import cloud8 from "@/public/img/cloud-8.png"
import cloud2 from "@/public/img/cloud-3.png"

export default function CloudePage() {
    return(
        <>
        <div className="pt-24 w-full h-screen relative">
            <Image className="absolute top-0 right-0" height={800} src={cloud8}/> 
        </div>
        <div className="w-full h-screen relative">
        <Image className="absolute -top-80 -left-16 drop-shadow-lg shadow-white" height={1000} src={cloud2}/>
        </div>
        </>
    )
}