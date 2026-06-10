import type React from "react"

type ContactMethodProps = React.InputHTMLAttributes<HTMLInputElement> & {
    contact: string
}

export default function ContactMethod({ contact, ...rest} : ContactMethodProps) {

    return (
        <>
            <label
                className="w-full h-auto py-3 px-6 rounded-lg border border-grey-500
                font-karla text-left text-lg text-grey-900 font-normal flex items-center gap-2.5
                has-checked:bg-green-200 has-checked:border-green-600"
            >
                <input
                    {...rest}
                    type="radio"
                    className="w-6 h-6 rounded-full border border-grey-500 accent-green-600"
                />
                {contact}
            </label>
        </>
    )

}
