'use client'
import React, { useState, useEffect, createContext } from "react"
import { housesData, priceRanges } from "@/constants"

type HouseContextType ={
    houses: typeof housesData;
    prices: typeof priceRanges;
    nigState: string;
    setNigState: React.Dispatch<React.SetStateAction<string>>;
    nigStates: string[];
    setNigStates: React.Dispatch<React.SetStateAction<string[]>>;
    property: string;
    setProperty: React.Dispatch<React.SetStateAction<string>>;
    properties: string[];
    setProperties: React.Dispatch<React.SetStateAction<string[]>>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    price: string;
    setPrice: React.Dispatch<React.SetStateAction<string>>;
    priceLists: string[];
    setPriceLists: React.Dispatch<React.SetStateAction<string[]>>
    handleClick: () => void   
}

const defaultValue: HouseContextType={
    houses:  housesData,
    prices: priceRanges,
    nigState: '',
    setNigState: () => undefined,
    nigStates: [],
    setNigStates: () => undefined ,
    property: '',
    setProperty: () => undefined,
    properties: [],
    setProperties: () => undefined,
    loading: false,
    setLoading: () => undefined,
    price: '',
    setPrice: () => undefined,
    priceLists: [],
    setPriceLists: () => undefined,
    handleClick: () => undefined
   
}


export const HouseContext = createContext<HouseContextType | typeof defaultValue>(defaultValue);

type HouseProps = {
    children: React.ReactNode;
}



const HouseContextProvider = ({children}: HouseProps) => {
    const [houses, setHouses] = useState(housesData);
    const [prices, setPrices] = useState(priceRanges);
    const [nigState, setNigState] = useState('Location (any)');
    const [nigStates, setNigStates] = useState<string[]>([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState('Price range (any)')
    const [priceLists, setPriceLists] = useState<string[]>([]);

   

    useEffect(() => {
      const allNigStates = houses.map((house) => {
        return house.state
      });

     const allProperties = houses.map((house) => {
       return house.type
     });

     const allPrices = prices.map((p) => {
      return p.value;
     })

      const uniqueStates = ['Location (any)', ...Array.from(new Set(allNigStates))]
      const uniqueProperties = ['Property type (any)', ...Array.from(new Set(allProperties))]
      
      setNigStates(uniqueStates);
      setProperties(uniqueProperties);
      setPriceLists(allPrices);
    }, []);

    const handleClick = () => {
     

      const isDedault = (str:string) => {
        return str.split(' ').includes('(any)')
      }

      console.log(price.split(' '))
    }


  return (
    <HouseContext.Provider value={{
        nigState,
        setNigState,
        nigStates,
        setNigStates,
        property,
        setProperty,
        properties,
        setProperties,
        houses,
        loading,
        setLoading,
        price,
        setPrice,
        prices,
        priceLists,
        setPriceLists,
        handleClick
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider;