"use client";

import { useData } from "@/contexts/DataContext";
import HistoryCard from "./HistoryCard";

export default function HistorySection() {
    const { relative } = useData();

    return (
        <section className="w-[22rem] px-2 h-[30rem] overflow-scroll bg-blue-secondary mx-auto mt-6 rounded-md">
            <div className="mt-3 flex flex-col gap-3">
                {relative?.map(({ desc, value, movementType, date }, index) => {
                    return (
                        <HistoryCard
                            key={index.toString()}
                            movementType={movementType}
                            date={date}
                            desc={desc}
                            value={value}
                        />
                    );
                })}
            </div>
        </section>
    );
}
