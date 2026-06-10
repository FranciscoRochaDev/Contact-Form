import type React from "react"
import Error from "./Error"

type FieldsProps = React.InputHTMLAttributes<HTMLInputElement> & {
    title: string,
    error: string | undefined
}

export default function Fields({ title, error, ...rest } : FieldsProps) {

    return (
        <div>
            <label
                htmlFor={rest.name}
                className="font-karla font-normal text-left text-sm text-grey-900"
            >
                {title}
                <span className="text-sm text-left text-green-600 font-karla">
                     *
                </span>
            </label>
            <input
                {...rest}
                className={`w-full h-auto border ${error ? 'border-errors' : 'border-grey-500'}  rounded-lg py-3 px-6 cursor-pointer mt-2.5
                    font-karla font-medium text-left text-lg text-grey-900 focus:outline-none ${error ? 'focus:border-errors' : 'focus:border-green-600'}
                `}
            />
            {error &&
                <Error>
                    {error}
                </Error>
            }
        </div>
    )

}
