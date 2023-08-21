"use client";
import {
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import axios from "axios";
import { RelativeExpense, Transactions } from "@/@types/types";

interface DataContext {
    transactions: Transactions | undefined;
}

export const DataContext = createContext({} as DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transactions>();

    const handleRequest = useCallback(async () => {
        const res = await axios.get("/api");
        setTransactions(res.data);
    }, []);

    useEffect(() => {
        handleRequest();
    }, [handleRequest]);
    return (
        <DataContext.Provider value={{ transactions }}>
            {children}
        </DataContext.Provider>
    );
};
