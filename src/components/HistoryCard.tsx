import { RelativeExpense } from "@/@types/types";

function formatDate(date: string) {
    if (!date) return "";

    const newDate = new Date(date);
    let month = newDate.toLocaleString("default", {
        month: `long`,
    });

    return (
        month.charAt(0).toUpperCase() +
        month.slice(1) +
        ", " +
        newDate.getFullYear()
    );
}
export default function HistoryCard({
    value,
    desc,
    date,
    movementType,
}: RelativeExpense) {
    console.log(date);
    return (
        <div className="w-full h-[4rem] bg-blue-primary rounded-md">
            <div className="flex flex-col gap-1 px-2 py-1">
                <div className="flex justify-between">
                    <p
                        className={`${
                            movementType.type === "entry"
                                ? "text-emerald-500"
                                : "text-red-500"
                        }`}
                    >
                        R$ {value}
                    </p>
                    <p>{formatDate(date)}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    );
}
