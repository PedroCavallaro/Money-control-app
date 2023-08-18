import Button from "./Button";

export default function ActionButtons() {
    return (
        <section className=" flex items-center justify-center gap-4 mt-8">
            <Button variant="entry" />
            <Button variant="spent" />
        </section>
    );
}
