'use client'
import {useContext} from "react"
import { HouseContext } from "./HouseContext"
import {ImSpinner2} from "react-icons/im"
import House from "./House"

import Link from "next/link"
const HouseList = () => {
    const {houses, loading} = useContext(HouseContext);

    if (loading) {
      return(
        <ImSpinner2 className="mx-auto animate-spin text-orange-600 text-4xl mt-[200px]"/>
      )
    }

    if (houses.length < 1){
      return(
        <p className="text-center text-3xl text-gray-300 p-10">Sorry, nothing found...</p>
      )
    }
  return (
    <section className="">
      <div className="container mx-auto">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
        {houses.map((house, index) => (
         <Link href={`/Property/${house.id}/`} key={index}>
          <House {...house}/>
         </Link>
        ))}
       </div>
      </div>
    </section>
  )
}

export default HouseList
