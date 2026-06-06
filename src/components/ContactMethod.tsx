
type ContactMethodProps = {
    contact: string,
    value: string
}

export default function ContactMethod({ contact, value} : ContactMethodProps) {

    return (
        <label
            className="w-full h-auto py-3 px-6 rounded-lg border border-grey-500
            font-karla text-left text-lg text-grey-900 font-normal flex items-center gap-2.5"
        >
            <input
                type="radio"
                name="query"
                value={value}
                className="w-6 h-6 rounded-full border border-grey-500"
            />
            {contact}
        </label>
    )

}
