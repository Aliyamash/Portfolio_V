import Image from "next/image";
import comment1 from '@/public/img/comment1.png'
import comment2 from '@/public/img/comment2.png'
import comment3 from '@/public/img/comment3.png'
import comment4 from '@/public/img/comment4.png'
import comment5 from '@/public/img/comment5.png'
import comment6 from '@/public/img/comment6.png'
import comment7 from '@/public/img/comment7.png'
import comment8 from '@/public/img/comment8.png'

export default function Comment() {
  return (
    <>
      <div className=" mt-96">
        {/* title of Comments */}
        <div className="my-auto py-20 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
            className="commentTxt text-center capitalize text-3xl w-9/12 mx-auto font-thin p-12   bg-[#343a40] text-[#f8f9fa]  rounded-3xl shadow-2xl"
          >
            Everything I do, I try to please the audience with great ideas and
            user interface
          </h1>
        </div>
        {/* Comments */}
        <div className="warrper1">

          <div className="items1 item1">
            <Image  src={comment1} className="object-fit rounded-lg" alt="comments"/>
          </div>

          <div className="items1 item2">
            <Image  src={comment2} className="object-fit rounded-lg" alt="comments" />
          </div>

          <div className="items1 item3">
            <Image  src={comment3} className="object-fit rounded-lg" alt="comments"/>
          </div>

          <div className="items1 item4">
            <Image  src={comment4} className="object-fit rounded-lg" alt="comments"/>
          </div>
        </div>

        <div  className="warrper2">
        <div className="items2 item5">
            <Image  src={comment5} className="object-fit rounded-lg" alt="comments"/>
          </div>

          <div className="items2 item6">
            <Image  src={comment6} className="object-fit rounded-lg" alt="comments"/>
          </div>

          <div className="items2 item7">
            <Image  src={comment7} className=" object-fit rounded-lg" alt="comments"/>
          </div>

          <div className="items2 item8">
            <Image  src={comment8} className="object-fit rounded-lg" alt="comments"/>
          </div>

        </div>
        {/* parent comments */}
        <div className="flex gap-8 justify-center mt-24">
          <div className="ptext capitalize w-1/3 text-center text-4xl px-24">
            <p>The programmer organizes the world and God loves order</p>
          </div>
          <div className="ptext capitalize w-1/3 text-center text-4xl p-8">
            <p>Enjoying seeing your art shows that you are awesome.</p>
          </div>
          
        </div>
      </div>
    </>
  );
}