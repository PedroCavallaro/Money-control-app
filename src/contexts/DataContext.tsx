"use client";
import { ReactNode, createContext, useState } from "react";

interface DataContext {
    data: Array<string>;
}

export const DataContext = createContext({} as DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState(["a", "b"]);
    return (
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    );
};
