import { DataContext } from "@/contexts/DataContext";
import { useContext, useRef } from "react";
import Chart from "react-apexcharts";

export default function FixedChart() {
    const { transactions } = useContext(DataContext);
    const graphRef = useRef(null);
    const options = {
        title: {
            text: "Fixos",
            style: {
                color: "#FFF",
                fontFamily: "Inter, Arial",
                fontWeight: 200,
            },
        },
        noData: { text: "No Data" },
        labels: ["Entrada Fixa", "Gasto Fixo", "Gasto de lazer"],
        colors: ["#80EF11", "#FF0303", "#FFCC19"],
        stroke: {
            show: false,
        },
        legend: {
            labels: {
                colors: ["#FFF", "#FFF", "#FFF"],
            },
        },
    };
    if (typeof transactions !== "undefined") {
        const { entry, leisure, spent } = transactions?.fixedExpenses;
        return (
            <div className="w-[20rem] h-[12rem] bg-blue-secondary rounded-2xl">
                <Chart
                    type="donut"
                    series={[entry, spent, leisure]}
                    options={options}
                />
            </div>
        );
    }
}
