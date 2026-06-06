import ContactMethod from "./ContactMethod";
import Fields from "./Fields";

export default function Form() {

    return (
        <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row">
                <Fields
                    title="First Name"
                    name="firstName"
                    type="text"
                />
                <Fields
                    title="Last Name"
                    name="lastName"
                    type="text"
                />
            </div>
            <Fields
                title="Email Address"
                name="emailAddress"
                type="text"
            />
            <div className="flex flex-col gap-4">
                <p className="font-karla font-normal text-left text-sm text-grey-900">
                    Query Type
                    <span className="text-sm text-left text-green-600 font-karla">
                        *
                    </span>
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <ContactMethod
                        contact="General Enquiry"
                        value="general"
                    />
                    <ContactMethod
                        contact="Support Request"
                        value="support"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="font-karla font-normal text-left text-sm text-grey-900"
                    htmlFor="message"
                >
                    Message
                    <span className="text-sm text-left text-green-600 font-karla">
                        *
                    </span>
                </label>
                <textarea
                    className="w-full h-auto rounded-lg py-3 px-6 border border-grey-500 resize-none
                    focus:outline-none focus:border-green-600 font-karla font-normal text-lg text-left text-grey-900"
                    name="message"
                    rows={5}
                    id="message"
                ></textarea>
            </div>
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    id="terms"
                />
                <label
                    htmlFor="terms"
                    className="font-karla font-normal text-left text-sm text-grey-900"
                >
                    I consent to being contacted by the team
                    <span className="text-sm text-left text-green-600 font-karla"> * </span>
                </label>
            </div>
            <button
                className="w-full h-auto py-4 px-10 rounded-lg border-none
                bg-green-600 font-karla font-bold text-lg text-left text-white
                flex items-center justify-center cursor-pointer hover:bg-green-800 transition-all"
            >
                Submit
            </button>
        </form>
    )

}
