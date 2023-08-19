"use client";
import { ReactNode, createContext, useMemo, useState } from "react";
import axios from "axios";
import { RelativeExpense } from "@/@types/types";

interface DataContext {
    data: RelativeExpense[] | undefined;
}

export const DataContext = createContext({} as DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState();

    const memo = useMemo(async () => {
        await axios.get("/api").then((res) => setData(res.data));
    }, []);
    return (
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    );
};
