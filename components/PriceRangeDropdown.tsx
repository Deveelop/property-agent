import { useState, useContext } from "react"
import {Menu} from '@headlessui/react'
import { HouseContext } from "./HouseContext"
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri"
const PriceRangeDropdown = () => {
  const {price, setPrice, priceLists} = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
    <Menu.Button  className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
      <RiWallet3Line className="dropdown-icon-primary"/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className="text-[13px]">Choose price range</div>
      </div>
      {isOpen ? (<RiArrowUpSLine className="dropdown-icon-secondary"/>) : (<RiArrowDownSLine className=' dropdown-icon-secondary'/>) }

    </Menu.Button>
    <Menu.Items className="dropdown-menu">
   {priceLists.map((pr, index) => (
    <Menu.Item as='li' key={index} onClick={() => setPrice(pr)} className='cursor-pointer hover:text-orange-600 transition'>
      {pr}
    </Menu.Item>
   ))}
    </Menu.Items>

      
    </Menu>
  )
}

export default PriceRangeDropdown;
