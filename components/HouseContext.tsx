'use client';

import React, { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import { housesData } from "@/constants";

type HouseContextType = {
    houses: typeof housesData;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    states: string[];
    setStates: Dispatch<SetStateAction<string[]>>;
    property: string;
    setProperty: Dispatch<SetStateAction<string>>;
    properties: string[];
    setProperties: Dispatch<SetStateAction<string[]>>;
    price: string;
    setPrice: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
};

type HouseProps = {
    children: ReactNode;
};

export const HouseContext = createContext<HouseContextType | undefined>(undefined);

const HouseContextProvider: React.FC<HouseProps> = ({ children }) => {
    const [houses, setHouse] = useState(housesData);
    const [state, setState] = useState('Location (any)');
    const [states, setStates] = useState<string[]>([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState<string[]>([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    return (
        <HouseContext.Provider value={{ houses, state, setState, states, setStates, property, setProperty, properties, setProperties, price, setPrice, loading, setLoading }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;