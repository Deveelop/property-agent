type HouseDisplayProps = {
    image: StaticImageData;
    type: string;
    state: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    surface: string;
    price: string;
}
import { StaticImageData } from 'next/image';
import { BiBed, BiBath, BiArea} from 'react-icons/bi'
import Image  from 'next/image';

const House = ({image, type, state, bedrooms, surface, price, address}: HouseDisplayProps) => {
  return (
    <div>
      <Image src={image} alt='house photo'/>
    </div>
  )
}

export default House

