type Status = "Entrada" | "Gasto";

interface FormProps {
    status: Status;
}
export default function MovimentationForm({ status }: FormProps) {
    return (
        <div className="flex flex-col">
            <p>Adicionar {status} </p>
            <div className="flex">
                <input type="text" />
                <button>Salvar</button>
            </div>
        </div>
    );
}
