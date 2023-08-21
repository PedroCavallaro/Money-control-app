import { DataContext } from "@/contexts/DataContext";
import { relativeOptions } from "@/lib/chart";
import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function RelativeChart() {
    const { relative } = useContext(DataContext);
    const [entries, setEntries] = useState(0);
    const [spent, setSpent] = useState(0);
    useEffect(() => {
        relative?.map((last) =>
            last.movementType.type === "entry"
                ? setEntries((prev) => prev + last.value)
                : setSpent((prev) => prev + last.value)
        );
    }, [relative]);
    return (
        <div className="w-[20rem] h-[12rem] bg-blue-secondary rounded-2xl">
            <Chart
                width={290}
                type="donut"
                series={[entries, spent]}
                options={relativeOptions}
            />
        </div>
    );
}
