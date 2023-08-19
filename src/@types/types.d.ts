export type Status = "entry" | "spent";
export type HistoryCardData = {
    desc: string;
    value: string;
    date: Date;
};

export type RelativeExpense = {
    desc: string;
    date: string;
    value: string;
    movementType: {
        select: {
            type: string;
        };
    };
};
