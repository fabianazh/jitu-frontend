'use client'

export default function BasicInput({
    label,
    name,
    type,
    placeholder,
    customClass,
}: IBasicInput) {
    return (
        <>
            <div className="flex flex-col gap-2 w-full h-auto">
                <label htmlFor={name} className="font-semibold">
                    {label}
                </label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    onChange={(e) => null}
                    className={`${customClass} w-full text-sm bg-stone-100 px-4 py-2 rounded-md`}
                    placeholder={placeholder}
                    required
                />
            </div>
        </>
    )
}
