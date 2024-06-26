'use client'
import {useContext} from "react"
import { HouseContext } from "./HouseContext"
import {ImSpinner2} from "react-icons/im"
import House from "./House"

import Link from "next/link"
const HouseList = () => {
    const {houses, loading} = useContext(HouseContext)
  return (
    <section className="mb-20">
      <div className="container mx-auto">
       <div>
        {houses.map((house, index) => (
         <Link href={`/property/${house.id}`} key={index}>
          <House {...house}/>
         </Link>
        ))}
       </div>
      </div>
    </section>
  )
}

export default HouseList
