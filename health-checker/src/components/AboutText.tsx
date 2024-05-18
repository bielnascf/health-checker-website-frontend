
interface IAboutTextProps {
    title: string;
    firstText: string;
    secondText: string;
}

export function AboutText({ title, firstText, secondText}: IAboutTextProps) {
    return (
        <section className="p-3 text-justify text-lg">
            <h2 className="text-3xl font-bold text-orange-500 text-center">{title}</h2>
            <p className="text-white mt-2">
                {firstText}
            </p>
            <p className="text-white">
                {secondText}
            </p>
        </section>
    )
}