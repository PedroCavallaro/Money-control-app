import { useData } from "@/contexts/DataContext";
import { fixedOptions } from "@/lib/chart";
import { useRef } from "react";
import Chart from "react-apexcharts";

export default function FixedChart() {
    const { fixed } = useData();
    const graphRef = useRef(null);

    if (typeof fixed !== "undefined") {
        const { entry, leisure, spent } = fixed;
        return (
            <div className="w-[20rem] h-[12rem] bg-blue-secondary rounded-2xl">
                <Chart
                    type="donut"
                    series={[entry, spent, leisure]}
                    options={fixedOptions}
                />
            </div>
        );
    }
}
