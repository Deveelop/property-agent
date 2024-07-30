type HouseDisplayProps = {
    image: StaticImageData;
    type: string;
    status: string;
    availability?: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    surface: string;
    price: string;
}
import { StaticImageData } from 'next/image';
import { BiBed, BiBath, BiArea, BiTime} from 'react-icons/bi'
import Image  from 'next/image';

const House = ({image, type, status, bathrooms, bedrooms, surface, price, address, availability}: HouseDisplayProps) => {
  return (
    <div className=' bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] max-h-[652px] h-full mx-auto cursor-pointer hover:shadow-2xl transition'>
      <Image className='mb-8' src={image} alt='house photo'/>
      <div className=' flex justify-between items-center'>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
      <div className='bg-orange-500 rounded-full text-white px-3'>{status}</div>
    </div>
    { availability ? <div className='flex relative place-content-center items-center mb-4 gap-x-1 px-3'><BiTime/><span>{availability}</span><span className='bg-red-600 animate-ping absolute -top-2 right-1 rounded-full flex items-center justify-center w-2 h-2' /> <span className='bg-red-600 absolute -top-2 right-1 rounded-full flex items-center justify-center w-2 h-2' /></div> : ''}
    </div>
    <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
    <div className=' flex gap-x-4 my-4'>
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'>
       <BiBed/>
      </div>
      <div>{bedrooms}</div>
    </div>
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'>
       <BiBath/>
      </div>
      <div>{bathrooms}</div>
    </div>
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'>
       <BiArea/>
      </div>
      <div>{surface}</div>
    </div>
    </div>
    <div className='text-lg font-semibold text-orange-600 mb-4'><span>&#8358;</span>{price}</div>
    </div>
  )
}

export default House

