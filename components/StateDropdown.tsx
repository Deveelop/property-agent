import { useContext, useState } from 'react'
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext'

const StateDropdown = () => {
  const {nigState, setNigState, nigStates} = useContext(HouseContext)
  console.log(setNigState)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative '>
     <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiMapPinLine className=' dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{nigState}</div>
        <div className='text-[13px]'>Select location</div>
      </div>
        {
          isOpen ? (<RiArrowUpSLine className=' dropdown-icon-secondary'/>) : (<RiArrowDownSLine  className=' dropdown-icon-secondary'/>)
        }
     </Menu.Button>
    </Menu>
  )
}

export default StateDropdown
