import { useForm } from "react-hook-form";
import { useContactStore } from "../store/store";
import ContactMethod from "./ContactMethod";
import Fields from "./Fields";
import type { ContactUs } from "../types";
import { toast } from "sonner";
import Error from "./Error";

export default function Form() {

    // Obtener la funcion de agregar Contacto
    const addContact = useContactStore((state) => state.addContact)

    // Usar Reack Hook Form para la validacion del Formulario
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactUs>()

    // Registrar un Contacto
    const registerContact = (data: ContactUs) => {

        addContact(data)

        toast.success('Message Sent!', {
            description: "Thanks for completing the form. We’ll be in touch soon!"
        })
        reset()
    }

    return (
        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(registerContact)}
        >
            <div className="flex flex-col gap-6 md:flex-row">
                <Fields
                    title="First Name"
                    name="firstName"
                    type="text"
                    {...register('firstName', {
                        required: 'This field is required'
                    })}
                    error={errors.firstName?.message}
                />
                <Fields
                    title="Last Name"
                    name="lastName"
                    type="text"
                    {...register('lastName', {
                        required: 'This field is required'
                    })}
                    error={errors.lastName?.message}
                />
            </div>
            <Fields
                title="Email Address"
                name="emailAddress"
                type="text"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                    }
                })}
                error={errors.email?.message}
            />
            <div className="flex flex-col gap-4">
                <p className="font-karla font-normal text-left text-sm text-grey-900">Query Type *</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <ContactMethod
                        contact="General Enquiry"
                        value="general"
                        {...register('queryType', {
                            required: 'Please select a query type'
                        })}
                    />
                    <ContactMethod
                        contact="Support Request"
                        value="support"
                        {...register('queryType', {
                            required: 'Please select a query type'
                        })}
                    />
                </div>
                {errors.queryType && (
                    <Error>
                        {errors.queryType?.message}
                    </Error>
                )}
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
                    className={`w-full h-auto rounded-lg py-3 px-6 border ${errors.message ? 'border-errors focus:border-errors' : 'border-grey-500 focus:border-green-600'}
                        resize-none focus:outline-none font-karla font-normal text-lg text-left text-grey-900`}
                    name="message"
                    rows={5}
                    id="message"
                    {...register('message', {
                        required: 'This field is required'
                    })}
                ></textarea>
                {errors.message && (
                    <Error>
                        {errors.message?.message}
                    </Error>
                )}
            </div>
            <div className="flex flex-col">
                <div className="flex gap-4">
                    <input
                        type="checkbox"
                        id="terms"
                        {...register('terms', {
                            required: 'To submit this form, please consent to being contacted'
                        })}
                    />
                    <label
                        htmlFor="terms"
                        className="font-karla font-normal text-left text-sm text-grey-900"
                    >
                        I consent to being contacted by the team
                        <span className="text-sm text-left text-green-600 font-karla"> * </span>
                    </label>
                </div>
                {errors.terms && (
                    <Error>
                        {errors.terms?.message}
                    </Error>
                )}
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
