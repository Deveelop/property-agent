import { useContext, useState } from "react"
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import { HouseContext } from "./HouseContext"

const PropertyDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button  onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
         
      <RiMapPinLine className=' dropdown-icon-primary'/>
      
      <div>
      <div className='text-[15px] font-medium leading-tight'>{property}</div>
      <div className='text-[13px]'>Select property type</div>
      </div>

      {isOpen ? (<RiArrowDownSLine className=' dropdown-icon-secondary'/>) : (<RiArrowUpSLine className=' dropdown-icon-secondary'/>)}

      </Menu.Button>
      <Menu.Items className="dropdown-menu">
       {
        properties.map((property, index) => (
          <Menu.Item as='li' key={index} onClick={() => setProperty(property)} className='cursor-pointer hover:text-orange-600 transition'>
           {property}
          </Menu.Item>
        ))
       }
      </Menu.Items>
     
    </Menu>
  )
}

export default PropertyDropdown
