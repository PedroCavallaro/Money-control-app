import { Menu } from "lucide-react";
import ActionButtons from "@/components/ActionButtons";
import HistorySection from "@/components/HistorySection";
import ChartSlider from "@/components/ChartSlider/ChartSlider";

export default function Home() {
    return (
        <main className="flex flex-col gap-3 overflow-x-hidden">
            <header className="px-2 py-2 text-blue-primary">
                <button>
                    <Menu size={35} />
                </button>
            </header>
            <section className="f   lex justify-center items-center gap-3">
                <ChartSlider />
            </section>
            <ActionButtons />
            <HistorySection />
        </main>
    );
}
