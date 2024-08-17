import Link from "next/link";

export default function Header () {
    return(
     <div className="header">
           <div className="container mx-auto py-4  flex justify-between  ">
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