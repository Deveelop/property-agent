import { useContext } from "react"
import PriceRangeDropdown from "./PriceRangeDropdown"
import PropertyDropdown from "./PropertyDropdown"
import StateDropdown from "./StateDropdown"
import { HouseContext } from "./HouseContext"

const Search = () => {
  const {houses} = useContext(HouseContext)
  return (
    <section>
      <div className=" px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row
       justify-between gap-4 lg:gap-x-3 relative lg:-top-4
        lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <StateDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/> 
      <button className=" bg-orange-500 hover:bg-orange-600 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
      Search  
      </button> 
      </div>      
    </section>
  )
}

export default Search
