import { Status } from "@/@types/types";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type PostData = {
    desc: string;
    value: number;
    movementTypeId: Status;
};

export async function GET(request: NextRequest) {
    const date = new Date();
    const month = date.getMonth() + 1;
    const lastExpenses = await prisma.relativeExpenses.findMany({
        where: {
            date: {
                gt: new Date(date.getFullYear(), month - 2, date.getDate()),
            },
        },
        select: {
            desc: true,
            date: true,
            value: true,
            movementType: {
                select: {
                    type: true,
                },
            },
        },
    });
    const fixedExpenses = await prisma.fixedExpenses.findFirstOrThrow();

    const transactions = {
        fixedExpenses,
        lastExpenses,
    };
    return new NextResponse(JSON.stringify(transactions));
}
export async function POST(request: NextRequest) {
    const statusId = {
        entry: "c0b1d08c-cbb0-4b0f-a017-acc12b2855b7",
        spent: "5e1db4b4-2a50-47e0-96f0-05798b808c2c",
    };

    const data: PostData = await request.json();
    const { desc, movementTypeId, value } = data;
    const transaction = await prisma.relativeExpenses.create({
        data: {
            date: new Date().toISOString(),
            desc,
            value: Number(value),
            movementTypeId: statusId[movementTypeId],
        },
    });
    const savedTransaction = {
        ...transaction,
        movementType: { type: movementTypeId },
    };
    console.log(savedTransaction);
    console.log(savedTransaction.movementType.type);
    if (!transaction) return NextResponse.error();
    return new NextResponse(JSON.stringify(savedTransaction));
}
