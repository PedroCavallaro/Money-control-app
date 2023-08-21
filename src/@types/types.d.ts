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
        type: Status;
    };
};

export type FixedTransactions = {
    entry: number;
    leisure: number;
    spent: number;
};

export type Transactions = {
    fixedExpenses: FixedTransactions;
    lastExpenses: RelativeExpense[];
};
