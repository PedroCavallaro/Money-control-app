import { DataProvider } from "@/contexts/DataContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Money control",
    description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white`}>
                <DataProvider>{children}</DataProvider>
            </body>
        </html>
    );
}
