import { Toaster } from "sonner"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  return (
    <>
        <Toaster
            position="top-center"
            toastOptions={{
                unstyled: true,
                classNames: {
                    toast: 'flex items-start gap-3 bg-grey-900 p-4 rounded-xl w-full',
                    icon: 'text-white mt-0.5',
                    title: 'font-karla text-white text-base font-bold',
                    description: 'font-karla text-sm font-normal text-white/70'
                }
            }}
        />
        <div className="max-w-2xl w-full h-auto rounded-2xl m-auto bg-white
            p-6 md:p-10 flex flex-col gap-8">
            <Header />
            <main>
                <Form />
            </main>
        </div>
    </>
  )
}

export default App
