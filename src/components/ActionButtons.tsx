"use client";
import Button from "./Button";
import MovementForm from "./MovementForm";
import { useMenu } from "@/hooks/useMenu";

export default function ActionButtons() {
    const { menu, openOnEntry, openOnSpent, closeMenu } = useMenu();

    return (
        <section className=" flex items-center justify-center gap-4 mt-2">
            <Button variant="entry" onClick={openOnEntry} />
            <Button variant="spent" onClick={openOnSpent} />
            <MovementForm
                status={menu.type}
                isOpen={menu.isOpen}
                closeMenu={closeMenu}
            />
        </section>
    );
}
