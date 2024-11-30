"use client"
import Link from "next/link";
import { Element } from "react-scroll";

export default function Header () {
    return(
     <div className="header container">
        <Element name="header-section"></Element>
           <div className="container mx-auto mb-60 lg:mx-8 py-4  flex justify-between  ">
            <div className="text-white" >
            <h1>menu</h1>
            </div>

            <Link href="#" className="text-white">
                <h1>AliAshrafi</h1>
            </Link>
        </div>
     </div>
    )
        
    
}