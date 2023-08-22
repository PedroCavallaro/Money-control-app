import { RelativeExpense, Status } from "@/@types/types";
import { useData } from "@/contexts/DataContext";
import axios from "axios";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormProps {
    status: Status;
    isOpen: boolean;
    closeMenu: () => void;
}

type FormData = {
    desc: string;
    value: number;
};

export default function MovementForm({ status, isOpen, closeMenu }: FormProps) {
    const { handleNewExpense } = useData();
    async function submit(status: Status, { desc, value }: FormData) {
        const res = await axios.post("/api", {
            desc,
            value,
            movementTypeId: status,
        });
        handleNewExpense(res.data);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
    });
    const type = status === "entry" ? "entrada" : "gasto";

    return (
        <form
            className={`${
                isOpen ? "flex" : "hidden"
            } flex-col transition-all gap-3 items-center justify-center absolute translate-y-[30%] bg-indigo-primary px-2 rounded-xl py-6 z-50 w-[20rem]`}
            onSubmit={handleSubmit((data) => {
                submit(status, data);
            })}
        >
            <button
                onClick={closeMenu}
                type="button"
                className="absolute top-0 right-0 mt-2 mr-2"
            >
                <X />
            </button>
            <h2 className="text-lg">Adicionar {type} </h2>
            <label htmlFor="" className="flex flex-col">
                <p>Descrição</p>
                <input
                    {...register("desc")}
                    type="text"
                    className="text-black w-[15rem]  py-2 px-1 rounded-sm"
                />
            </label>
            <label htmlFor="" className="flex flex-col ">
                <p>Valor</p>
                <input
                    {...register("value")}
                    type="string"
                    className="text-black w-[15rem] py-2 px-1 rounded-sm"
                />
            </label>
            <button
                type="submit"
                className={`py-2 rounded-sm mt-2 w-[15rem]  ${
                    status === "entry" ? "bg-emerald-500" : "bg-red-700"
                } `}
            >
                Salvar
            </button>
        </form>
    );
}
