import { RelativeExpense } from "@/@types/types";

function formatDate(date: string) {
    if (!date) return "";

    const newDate = new Date(date);
    let month = newDate.toLocaleString("default", {
        month: `long`,
    });

    return (
        newDate.getDate() +
        ", " +
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
                        {Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(Number(value))}
                    </p>
                    <p className="text-xs">{formatDate(date.toString())}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    );
}
