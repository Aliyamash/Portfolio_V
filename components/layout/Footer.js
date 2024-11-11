import Link from "next/link";

export default function Footer (){
    return(
        <>
            <div className="bg-black py-96">
               <div className="flex justify-between px-24 py-36 text-white">
                <Link href="#">back to up</Link>
                <h1>Ali Ashrafi</h1>
               </div>
                <div className="text-center text-3xl text-yellow-400 mt-24">
                    <p>Do you want to cooperate?</p>
                </div>
            </div>
        </>
    )
}