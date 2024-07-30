"use client"



import { Parallax , ParallaxLayer } from "@react-spring/parallax"

import Moon from "@/public/img/pexels-pixabay-47367.jpg"
import down from "@/public/img/pexels-aronvisuals-1743165.jpg"

import Image from "next/image"
import ScrollHandler from "../layout/ScrollHandler"


export default function Hero () {

return(
 
    <>
    
     <div className="container text-center">
      
      <Parallax pages={4} >
      <ScrollHandler/>
          <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
         style={{
          width: "50rem",
          height: "50rem",
          margin: "0 auto"
         }}
          >
            <Image className="object-cover" src={Moon} alt="" /> 
          </ParallaxLayer>
  
  
  
          <ParallaxLayer  speed={1} offset={0.5}>
              <h1 className="mt-5 text-white text-6xl">Two Hands , (One) masterPiece</h1>
          </ParallaxLayer>
  
  
  
  
  
  
          <ParallaxLayer  offset={2} speed={0.5}>
          <h1 className="text-white text-7xl">Love U ali</h1>
          </ParallaxLayer>
  
  
  
          <ParallaxLayer
          offset={3}
          speed={1}
          factor={2}
          style={{
              width: "100%",
              height: "80%"
          }}
          >
            <Image className="object-fit" src={down} alt="zabze" /> 
          </ParallaxLayer>
      </Parallax>
      <div className="pic">
          
      </div>
    </div>
    </>
)
}