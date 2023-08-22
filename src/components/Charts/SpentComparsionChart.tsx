import { useData } from "@/contexts/DataContext";
import { relativeOptions } from "@/lib/chart";
import Chart from "react-apexcharts";

export default function SpentComparsionChart() {
    const { relative } = useData();
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
