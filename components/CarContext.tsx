import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the context type
export interface CarData {
    id: number;              
    brand: string;
    model: string;
    year: number;
    automatic: boolean;
    price: number;
    rental_distance: number;
}

interface CarsContextType {
    Cars: CarData[];
    AddCar: (Car: CarData) => void;
    RemoveCar: (Car: CarData) => void;
    ReplaceCars: (newCars: CarData[]) => void;
}

const defaultValue: CarsContextType = {
    Cars: [],
    AddCar: () => {},
    RemoveCar: () => {},
    ReplaceCars: () => {},
};

export const CarsContext = createContext<CarsContextType>(defaultValue);

// Create a provider component
export const CarsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [Cars, setCars] = useState<CarData[]>([]);
    const fetchedData = "fetchedData";

    const AddCar = (Car: CarData) => {
        setCars((prevCars) => [...prevCars, Car]);
    };

    const RemoveCar = (Car: CarData) => {
        setCars((prevCars) => prevCars.filter(c => c !== Car));
    };

    const ReplaceCars = (newCars: CarData[]) => {
        setCars(newCars);
    };

    useEffect(() => {
        const loadData = async () => {
            const persistedData = await AsyncStorage.getItem(fetchedData);
            if (persistedData) {
                console.log("Loading data from storage");
                setCars(JSON.parse(persistedData));
            } else {
                console.log("Fetching data from API");
                const response = await axios.get("https://gist.githubusercontent.com/Wuldnarp/d8c1184fc1e34ccb4956f2f410ca4128/raw/9099e3bd904dff7ccfd7e85a848f5c92c2ed1f6e/data.json");
                setCars(response.data);
                await AsyncStorage.setItem(fetchedData, JSON.stringify(response.data));
            }
        };
        loadData();
    }, []);

    return (
        <CarsContext.Provider value={{ Cars, AddCar,RemoveCar, ReplaceCars }}>
            {children}
        </CarsContext.Provider>
    );
};