import Image from "next/image";
import { Menu } from "lucide-react";
import FixedChart from "@/components/Charts/FixedChart";
import ActionButtons from "@/components/ActionButtons";
import HistorySection from "@/components/HistorySection";
import Slider from "@/components/Slider/Slider";
export default function Home() {
    return (
        <main className="flex flex-col gap-3">
            <header className="px-2 py-2 text-blue-primary">
                <Menu size={35} />
            </header>
            <section className="flex justify-center items-center gap-3">
                <Slider />
            </section>
            <ActionButtons />
            <HistorySection />
        </main>
    );
}
