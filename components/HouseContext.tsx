'use client'
import React, { useState, useEffect, createContext } from "react"
import { housesData } from "@/constants"

type HouseContextType ={
    houses: typeof housesData;
    nigState: string;
    setNigState: React.Dispatch<React.SetStateAction<string>>;
    nigStates: string[];
    setNigStates: React.Dispatch<React.SetStateAction<string[]>>;
    property: string;
    setProperty: React.Dispatch<React.SetStateAction<string>>;
    properties: string[];
    setProperties: React.Dispatch<React.SetStateAction<string[]>>
    price: string;
    setPrice: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean
}

const defaultValue: HouseContextType={
    houses:  housesData,
    nigState: '',
    setNigState: () => undefined,
    nigStates: [],
    setNigStates: () => undefined ,
    property: '',
    setProperty: () => undefined,
    properties: [],
    setProperties: () => undefined,
    price: '',
    setPrice: () => undefined,
    loading: false
}


export const HouseContext = createContext<HouseContextType | typeof defaultValue>(defaultValue);

type HouseProps = {
    children: React.ReactNode;
}



const HouseContextProvider = ({children}: HouseProps) => {
    const [houses, setHouses] = useState(housesData);
    const [nigState, setNigState] = useState('Location (any)');
    const [nigStates, setNigStates] = useState<string[]>([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState<string[]>([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);
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
        price,
        setPrice,
        houses,
        loading,
        

    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider;