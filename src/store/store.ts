import { create } from "zustand"
import type { ContactUs } from "../types"
import { devtools, persist } from "zustand/middleware"

type ContactUsState = {
    contacts: ContactUs[],
    addContact: (data: ContactUs) => void
}

export const useContactStore = create<ContactUsState>()(
    devtools(
        persist((set) => ({

        // Inicializa el objeto
        contacts: [],
        addContact: (data) => {

            const newContact = data

            // Agrega el Nuevo Contacto
            set((state) => ({
                contacts: [
                    ...state.contacts,
                    newContact
                ]
            }))
        }
    }), {
        name: 'contact-storage'
    })
))
