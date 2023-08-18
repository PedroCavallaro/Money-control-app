"use client";
import { DataContext } from "@/contexts/DataContext";
import { useContext } from "react";
import HistoryCard from "./HistoryCard";

export default function HistorySection() {
    const { data } = useContext(DataContext);
    return (
        <section className="w-[20rem] px-4 h-[30rem] overflow-scroll bg-blue-secondary mx-auto mt-8 rounded-md">
            <div className="mt-3 flex flex-col gap-3">
                {data.map((movimentation, index) => {
                    return <HistoryCard key={index.toString()} />;
                })}
            </div>
        </section>
    );
}
