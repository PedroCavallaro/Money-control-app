"use client";
import Button from "./Button";
import MovimentationForm from "./MovimentationForm";
import { useMenu } from "@/hooks/useMenu";

export default function ActionButtons() {
    const { menu, openOnEntry, openOnSpent } = useMenu();
    console.log(menu);
    return (
        <section className=" flex items-center justify-center gap-4 mt-8">
            <Button variant="entry" onClick={openOnEntry} />
            <Button variant="spent" onClick={openOnSpent} />
            <MovimentationForm status={menu.type} isOpen={menu.isOpen} />
        </section>
    );
}
