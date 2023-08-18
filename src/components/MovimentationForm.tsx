import { Status } from "@/@types/types";
import { useMenu } from "@/hooks/useMenu";
import { X } from "lucide-react";

interface FormProps {
    status: Status;
    isOpen: boolean;
}
export default function MovimentationForm({ status, isOpen }: FormProps) {
    const { closeMenu } = useMenu();
    const type = status === "entry" ? "entrada" : "gasto";

    return (
        <>
            {isOpen && (
                <form className="flex flex-col  gap-3 items-center justify-center absolute translate-y-[30%] bg-indigo-primary px-2 rounded-xl py-6 z-50 w-[24rem]">
                    <button
                        onClick={() => closeMenu()}
                        type="button"
                        className="absolute top-0 right-0 mt-2 mr-2"
                    >
                        <X />
                    </button>
                    <h2 className="text-lg">Adicionar {type} </h2>
                    <label htmlFor="" className="flex flex-col">
                        <p>Descrição</p>
                        <input
                            type="text"
                            className="text-black w-[15rem]  py-2 px-1 rounded-lg"
                        />
                    </label>
                    <label htmlFor="" className="flex flex-col ">
                        <p>Valor</p>
                        <input
                            type="number"
                            className="text-black w-[15rem] py-2 px-1 rounded-lg"
                        />
                    </label>
                    <button
                        type="submit"
                        className={`py-2 rounded-lg mt-3 w-[15rem]  ${
                            status === "entry" ? "bg-emerald-500" : "bg-red-700"
                        } `}
                    >
                        Salvar
                    </button>
                </form>
            )}
        </>
    );
}
