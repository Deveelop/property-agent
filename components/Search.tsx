'use client'
import PriceRangeDropdown from "./PriceRangeDropdown"
import PropertyDropdown from "./PropertyDropdown"
import StateDropdown from "./StateDropdown"
import Button from "./Button"
import {RiSearch2Line} from 'react-icons/ri'

const Search = () => {


  return (
    <section className="">
      <div className=" px-[30px] py-6 max-w-[1170px]  mx-auto flex flex-col lg:flex-row
       justify-between gap-4 lg:gap-x-3 relative lg:-top-4
        lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <StateDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/> 
      <Button  icon={<RiSearch2Line/>} type="button" title="Search" variant="bg-orange-500 hover:bg-orange-600 transition w-full lg:max-w-[162px] h-16 text-white"/>
      </div>      
    </section>
  )
}

export default Search
