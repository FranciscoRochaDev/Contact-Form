type FieldsProps = {
    title: string,
    name: string,
    type: string
}

export default function Fields({ title, name ,type } : FieldsProps) {

    return (
        <div>
            <label
                htmlFor={name}
                className="font-karla font-normal text-left text-sm text-grey-900"
            >
                {title}
                <span className="text-sm text-left text-green-600 font-karla">
                     *
                </span>
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className="w-full h-auto border border-grey-500 rounded-lg py-3 px-6 cursor-pointer mt-2.5
                    font-karla font-medium text-left text-lg text-grey-900 focus:outline-none focus:border-green-600"
            />
        </div>
    )

}
