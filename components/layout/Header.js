"use client"
import Image from "next/image";
import logo from "@/public/img/alilogo.png";
import Link from "next/link";
import { Element } from "react-scroll";

export default function Header () {
    return(
     <div className="mx-4">
        <Element name="header-section"></Element>
           <div className="lg:mx-8 py-4 flex items-center justify-between  ">
            <div className="text-white text-lg lg:text-2xl" >
            <h1>Menu</h1>
            </div>
            <Link href="#" className="-mr-2 text-white">
               <Image src={logo} className="logo-head" alt="logo" width={100} height={100}/>
            </Link>
        </div>
     </div>
    )
        
    
}