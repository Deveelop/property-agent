'use client'

import { useParams } from "next/navigation";
import { housesData } from "@/constants";
import Image from "next/image";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import Link from "next/link";



export default function Home() {
  const {id} = useParams();
  const idDes = String(id)
 const house = housesData.find((houz) => {
  return houz.id === parseInt(idDes);
 })

  return (
 <section>
 <div className="container mx-auto min-h-[800px] ">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
  <div>
    <h2 className="text-2xl font-semibold">{house?.name}</h2>
    <h3 className=" text-lg mb-4">{house?.address}</h3>
  </div>
  <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
    <div className="bg-green-500 text-white px-3 rounded-full">{house?.type}</div>
    <div className="bg-orange-500 text-white px-3 rounded-full">{house?.status}</div>
  </div>
  <div className="text-3xl font-semibold text-orange-600"><span>&#8358;</span> {house?.price}</div>
</div>
<div className="flex flex-col items-start gap-8 lg:flex-row">
  <div className="max-w-[768px]">
    <div className="mb-8">
    <Image src={house ? house.imageLg : ''} alt="largepic"/>
    </div>
    <div className="flex gap-x-6 text-orange-600 mb-6">
      <div className="flex gap-x-2 items-center">
        <BiBed className="text-2xl"/>
        <div>{house?.bedrooms}</div>
      </div>
      <div className="flex gap-x-2 items-center">
        <BiBath className="text-2xl"/>
        <div>{house?.bathrooms}</div>
      </div>
      <div className="flex gap-x-2 items-center">
        <BiArea className="text-2xl"/>
        <div>{house?.surface}</div>
      </div>
    </div>
    <div>{house?.description}</div>
  </div>
  <div className=" flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
    <div className=" flex items-center gap-x-4 mb-8">
      <div className=" w-20 h-20 p-1 border border-gray-300 rounded-full">
        <Image src={house ? house.agent.image : ''} alt="agent" width={100} className=" rounded-full"/>
      </div>
      <div>
        <div className=" font-bold text-lg">{house?.agent.name}</div>
        <Link href='/' className=" text-orange-500">View Listings</Link>
      </div>
    </div>
    <form className=" flex flex-col gap-y-4">
      <input placeholder="Name*" className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" type="text"/>
      <input placeholder="Email*"  className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" type="text"/>
      <input placeholder="Phone*"  className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" type="text"/>
      <textarea className=" border border-gray-300 focus:border-orange-600 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400 " placeholder="Message*" defaultValue="Hello I am interested in [Modern apartment]"></textarea>
      <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded p-4 text-sm w-full">Send message</button>
      </div>
    </form>
  </div>

</div>
 </div>
 
 </section>
  );
}
