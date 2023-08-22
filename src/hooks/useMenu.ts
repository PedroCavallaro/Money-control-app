import { Status } from "@/@types/types";
import { Menu } from "lucide-react";
import { useState } from "react";

type Menu = {
    type: Status;
    isOpen: boolean;
};
export function useMenu() {
    const [menu, setMenu] = useState<Menu>({
        isOpen: false,
        type: "entry",
    });
    const openOnEntry = () => {
        setMenu((previous) => ({
            ...previous,
            isOpen: true,
        }));
    };
    const openOnSpent = () => {
        setMenu((previous) => ({
            ...previous,
            type: "spent",
            isOpen: true,
        }));
    };
    const closeMenu = () => {
        setMenu((previous) => ({
            ...previous,
            type: "entry",
            isOpen: false,
        }));
    };
    return {
        openOnEntry,
        openOnSpent,
        closeMenu,
        menu,
    };
}
