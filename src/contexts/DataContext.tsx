"use client";
import { ReactNode, createContext, useMemo, useState } from "react";
import axios from "axios";
import { RelativeExpense } from "@/@types/types";

interface DataContext {
    transactions: RelativeExpense[] | undefined;
    value: number;
    description: string;
}

export const DataContext = createContext({} as DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<RelativeExpense[]>();

    const memo = useMemo(async () => {
        await axios.get("/api").then((res) => setTransactions(res.data));
    }, []);
    return (
        <DataContext.Provider value={{ transactions }}>
            {children}
        </DataContext.Provider>
    );
};
