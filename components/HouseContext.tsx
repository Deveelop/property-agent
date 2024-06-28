'use client'
import React, { useState, useEffect, createContext } from "react"
import { housesData, priceRange } from "@/constants"

type HouseContextType ={
    houses: typeof housesData;
    prices: typeof priceRange;
    nigState: string;
    setNigState: React.Dispatch<React.SetStateAction<string>>;
    nigStates: string[];
    setNigStates: React.Dispatch<React.SetStateAction<string[]>>;
    property: string;
    setProperty: React.Dispatch<React.SetStateAction<string>>;
    properties: string[];
    setProperties: React.Dispatch<React.SetStateAction<string[]>>
    pricesRange: string[];
    setPricesRange: React.Dispatch<React.SetStateAction<string[]>>
    priceList: string;
    setPriceList: React.Dispatch<React.SetStateAction<string>>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
   
}

const defaultValue: HouseContextType={
    houses:  housesData,
    prices: priceRange,
    nigState: '',
    setNigState: () => undefined,
    nigStates: [],
    setNigStates: () => undefined ,
    property: '',
    setProperty: () => undefined,
    properties: [],
    setProperties: () => undefined,
    pricesRange: [],
    setPricesRange: () => undefined,
    priceList: '',
    setPriceList: () => undefined,
    loading: false,
    setLoading: () => undefined,
   
}


export const HouseContext = createContext<HouseContextType | typeof defaultValue>(defaultValue);

type HouseProps = {
    children: React.ReactNode;
   
}



const HouseContextProvider = ({children}: HouseProps) => {
    const [houses, setHouses] = useState(housesData);
    const [prices,  setPrice] = useState(priceRange)
    const [nigState, setNigState] = useState('Location (any)');
    const [nigStates, setNigStates] = useState<string[]>([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState<string[]>([]);
    const [priceList, setPriceList] = useState('Price range (any)');
    const [pricesRange, setPricesRange] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

   

    useEffect(() => {
      const allNigStates = houses.map((house) => {
        return house.state
      });

     const allProperties = houses.map((house) => {
       return house.type
     });

     const allPriceRange = prices.map((price) => {
      return price.value
     })

      const uniqueStates = ['Location (any)', ...Array.from(new Set(allNigStates))]
      const uniqueProperties = ['Property type (any)', ...Array.from(new Set(allProperties))]
      const uniquePrices = ['Price range (any)', ...Array(new Set(allPriceRange))]

      setNigStates(uniqueStates);
      setProperties(uniqueProperties);
      setPricesRange(uniquePrices)
     

    
    }, [])
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
        prices,
        pricesRange,
        priceList,
        setPriceList,
        setPricesRange,
        loading,
        setLoading,
     
        

    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider;