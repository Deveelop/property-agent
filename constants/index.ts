// import house images
import House1 from '../public/house1.png';
import House2 from '../public/house1.png';

// import house large images
import House1Lg from '../public/house1.png';
import House2Lg from '../public/house1.png';


// import apartments images
import Apartment1 from '../public/house1.png';
import Apartment2 from '../public/house1.png';

// import apartments large images
import Apartment1Lg from '../public/house1.png';
import Apartment2Lg from '../public/house1.png';


// import agents images
import Agent1 from '../public/house1.png';
import Agent2 from '../public/house1.png';

export const priceRange = [
  {value: 'Price range (any)'},
  {value: '80000 - 130000'},
  {value: '150000 - 230000'},
  {value: '300000 - 500000'},
  {value: '60000 - 700000'},
  {value: '800000 - 930000'},
  {value: '1000000 - 1500000'},


]


export const housesData = [
    {
      id: 1,
      type: 'House',
      name: 'House 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House1,
      imageLg: House1Lg,
      state: 'Benue',
      address: '7240C Argyle St. Lawndale, Makurdi',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2024',
      price: '110000',
      agent: {
        image: Agent1,
        name: 'Patricia Tullert',
        phone: '+234 70 ****',
      },
    },
    {
      id: 2,
      type: 'Shop',
      name: 'Shop 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House2,
      imageLg: House2Lg,
      state: 'Benue',
      address: '798 Talbot St. Bridgewater, Makurdi',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2024',
      price: '140000',
      agent: {
        image: Agent2,
        name: 'Daryl Hawker',
        phone: '+234 70 ****',
      },
    },
    {
      id: 3,
      type: 'House',
      name: 'House 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House1,
      imageLg: House1Lg,
      state: 'Benue',
      address: '2 Glen Creek St. Alexandria, Makurdi',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2024',
      price: '170000',
      agent: {
        image: Agent1,
        name: 'Amado Smith',
        phone: '+234 70 ****',
      },
    },
    {
      id: 4,
      type: 'Office',
      name: 'Office 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House1,
      imageLg: House1Lg,
      state: 'Benue',
      address: '84 Woodland St. Cocoa, Makurdi',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2024',
      price: '200000',
      agent: {
        image: Agent1,
        name: 'Kaitlyn Gonzalez',
        phone: '+234 70 ****',
      },
    },
    {
      id: 5,
      type: 'House',
      name: 'House 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House1,
      imageLg: House1Lg,
      state: 'Benue',
      address: '28 Westport Dr. Warminster, Makurdi',
      bedrooms: '5',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2024',
      price: '210000',
      agent: {
        image: Agent1,
        name: 'Grover Robinson',
        phone: '+234 70 ****',
      },
    },
    {
      id: 6,
      type: 'Shop',
      name: 'Shop 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House2,
      imageLg: House2Lg,
      state: 'Benue',
      address: '32 Pawnee Street Butte, Makurdi',
      bedrooms: '6',
      bathrooms: '3',
      surface: '6200 sq ft',
      year: '2024',
      price: '220000',
      agent: {
        image: Agent2,
        name: 'Karen Sorensen',
        phone: '+234 70 ****',
      },
    },
    {
      id: 7,
      type: 'Apartament',
      name: 'Apartament 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment1,
      imageLg: Apartment1Lg,
      state: 'Benue',
      address: '32 Pawnee Street Butte, Makurdi',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1200 sq ft',
      year: '2024',
      price: '200000',
      agent: {
        image: Agent1,
        name: 'Jawhar Shamil Naser',
        phone: '+234 70 ****',
      },
    },
    {
      id: 8,
      type: 'Apartament',
      name: 'Apartament 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment2,
      imageLg: Apartment2Lg,
      state: 'Benue',
      address: '28 Westport Dr. Warminster, Makurdi',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1000 sq ft',
      year: '2024',
      price: '600000',
      agent: {
        image: Agent1,
        name: 'Juana Douglass',
        phone: '+234 70 ****',
      },
    },
    {
      id: 9,
      type: 'Apartament',
      name: 'Apartament 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment2,
      imageLg: Apartment2Lg,
      state: 'Benue',
      address: '84 Woodland St. Cocoa, Makurdi',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1100 sq ft',
      year: '2024',
      price: '800000',
      agent: {
        image: Agent1,
        name: 'Jerry Schenck',
        phone: '+234 70 ****',
      },
    },
    {
      id: 10,
      type: 'Office',
      name: 'Office 7',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House2,
      imageLg: House2Lg,
      state: 'Benue',
      address: '7240C Argyle St. Lawndale, Makurdi',
      bedrooms: '5',
      bathrooms: '3',
      surface: '3200 sq ft',
      year: '2024',
      price: '170000',
      agent: {
        image: Agent1,
        name: 'Vera Levesque',
        phone: '+234 70 ****',
      },
    },
    {
      id: 11,
      type: 'House',
      name: 'House 8',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House2,
      imageLg: House2Lg,
      state: 'Benue',
      address: '798 Talbot St. Bridgewater, Makurdi',
      bedrooms: '7',
      bathrooms: '2',
      surface: '2200 sq ft',
      year: '2024',
      price: '140000',
      agent: {
        image: Agent1,
        name: 'Sofia Gomes',
        phone: '+234 90 ****',
      },
    },
    {
      id: 12,
      type: 'House',
      name: 'House 9',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House2,
      imageLg: House2Lg,
      state: 'Benue',
      address: '2 Glen Creek St. Alexandria, Makurdi',
      bedrooms: '4',
      bathrooms: '4',
      surface: '4600 sq ft',
      year: '2024',
      price: '130000',
      agent: {
        image: Agent2,
        name: 'Raymond Hood',
        phone: '+234 70 ****',
      },
    },
    {
      id: 13,
      type: 'House',
      name: 'House 10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House1,
      imageLg: House1Lg,
      state: 'Benue',
      address: '84 Woodland St. Cocoa, Makurdi',
      bedrooms: '5',
      bathrooms: '2',
      surface: '5200 sq ft',
      year: '2024',
      price: '180000',
      agent: {
        image: Agent1,
        name: 'Patricia Tullert',
        phone: '+234 70 ***',
      },
    },
    {
      id: 14,
      type: 'House',
      name: 'House 11',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House1,
      imageLg: House1Lg,
      state: 'Benue',
      address: '28 Westport Dr. Warminster, Makurdi',
      bedrooms: '5',
      bathrooms: '2',
      surface: '3200 sq ft',
      year: '2024',
      price: '300000',
      agent: {
        image: Agent2,
        name: 'Daryl Hawker',
        phone: '234 80 ****',
      },
    },
    {
      id: 15,
      type: 'House',
      name: 'House 12',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House2,
      imageLg: House2Lg,
      state: 'Benue',
      address: '3 Highlevel round-about, Makurdi',
      bedrooms: '4',
      bathrooms: '3',
      surface: '5200 sq ft',
      year: '2024',
      price: '150000',
      agent: {
        image: Agent2,
        name: 'Amado Smith',
        phone: '234 70 ****',
      },
    },
    {
      id: 16,
      type: 'Apartament',
      name: 'Apartament 16',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment1,
      imageLg: Apartment1Lg,
      state: 'Benue',
      address: '3 Judges qrts, Makurdi',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1300 sq ft',
      year: '2024',
      price: '210000',
      agent: {
        image: Agent2,
        name: 'Kaitlyn Gonzalez',
        phone: '234 90 *****',
      },
    },
    {
      id: 17,
      type: 'Apartament',
      name: 'Apartament 17',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment1,
      imageLg: Apartment1Lg,
      state: 'Benue',
      address: '28 Wurukum market. Oxnet Sachet Water Factory. Makurdi',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1000 sq ft',
      year: '2024',
      price: '20000',
      agent: {
        image: Agent2,
        name: 'Grover Robinson',
        phone: '234 8** *****',
      },
    },
    {
      id: 18,
      type: 'Apartament',
      name: 'Apartament 18',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment2,
      imageLg: Apartment2Lg,
      state: 'Benue',
      address: '84 Gboko road. Cocacola deport, Makurdi',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1200 sq ft',
      year: '2024',
      price: '300000',
      agent: {
        image: Agent2,
        name: 'Karen Sorensen',
        phone: '+234 8** *****',
      },
    },
  ];