export default function BasicTextarea({
    label,
    name,
    placeholder,
    customClass,
}: IBasicTextarea) {
    return (
        <>
            <div className="flex flex-col gap-2 w-full h-auto">
                <label htmlFor={name} className="font-semibold">
                    {label}
                </label>
                <textarea
                    name={name}
                    id={name}
                    className={`${customClass} w-full text-sm min-h-[8rem] bg-stone-100 px-4 py-3 rounded-md`}
                    placeholder={placeholder}
                ></textarea>
            </div>
        </>
    )
}
