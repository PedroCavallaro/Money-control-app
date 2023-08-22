"use client";
import {
    ReactNode,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import axios, { AxiosResponse } from "axios";
import {
    FixedTransactions,
    RelativeExpense,
    Transactions,
} from "@/@types/types";

interface DataContext {
    fixed: FixedTransactions | undefined;
    relative: RelativeExpense[] | undefined;
}

const DataContext = createContext({} as DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [fixed, setFixed] = useState<FixedTransactions>();
    const [relative, setRelative] = useState<RelativeExpense[]>();

    const handleRequest = useCallback(async () => {
        const { data }: AxiosResponse<Transactions> = await axios.get("/api");

        setFixed(data.fixedExpenses);
        setRelative(data.lastExpenses);
    }, []);

    useEffect(() => {
        handleRequest();
    }, [handleRequest]);
    return (
        <DataContext.Provider value={{ fixed, relative }}>
            {children}
        </DataContext.Provider>
    );
};
export const useData = () => useContext(DataContext);
