import { useContext, useState, useEffect} from 'react'
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext'



const StateDropdown = () => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setLocations(data);
        console.log("Nothing here",data)
      } catch (error) {
        console.log("Error in fetching", error);
      }
    };
    fetchLocation();
  }, [])
  const {nigState, setNigState, nigStates, locations, setLocations} = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Menu as='div' className='dropdown relative '>
     <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiMapPinLine className=' dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{nigState}</div>
        <div className='text-[13px]'>Select location</div>
      </div>
        {
          isOpen ? (<RiArrowUpSLine  className=' dropdown-icon-secondary'/>) : (<RiArrowDownSLine className=' dropdown-icon-secondary'/>) 
        }
     </Menu.Button>

     <Menu.Items className="dropdown-menu">
      {locations.map((nigstate, index) => (
       <Menu.Item key={index} onClick={()=> setNigState(nigstate)} as='li' className='cursor-pointer hover:text-orange-600 transition'>
        {nigstate}
       </Menu.Item>
      ))}
     </Menu.Items>
    </Menu>
  )
}

export default StateDropdown
