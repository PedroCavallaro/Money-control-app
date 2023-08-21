import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const date = new Date();
    const lastExpenses = await prisma.relativeExpenses.findMany({
        where: {
            date: {
                gt: new Date(
                    date.getFullYear(),
                    date.getMonth() + 1 - 2,
                    date.getDate()
                ),
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

    return new NextResponse(JSON.stringify(lastExpenses));
}
