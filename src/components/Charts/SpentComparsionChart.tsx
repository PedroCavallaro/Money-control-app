import { DataContext } from "@/contexts/DataContext";
import { relativeOptions } from "@/lib/chart";
import { useContext } from "react";
import Chart from "react-apexcharts";

export default function SpentComparsionChart() {
    const { transactions } = useContext(DataContext);
    let lastMonthSpents = 0;
    let actualMonthSpents = 0;
    // if (typeof transactions !== "undefined") {
    //     transactions.lastExpenses.map((last) => {
    //         if (last.movementType.type === "entry") return;

    //         if (new Date(last.date).getMonth() + new Date().getMonth() !== 1) {
    //             console.log(last);
    //             lastMonthSpents += last.value;
    //             return;
    //         }
    //         actualMonthSpents += last.value;
    //     });
    // }
    console.log(actualMonthSpents);
    console.log(lastMonthSpents);
    return (
        <div className="w-[20rem] h-[12rem] bg-blue-secondary rounded-2xl">
            {/* <Chart
                    width={290}
                    type="donut"
                    series={}
                    options={relativeOptions}
                /> */}
        </div>
    );
}
