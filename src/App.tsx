import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  return (
    <div className="max-w-2xl w-full h-auto rounded-2xl m-auto bg-white
        p-6 md:p-10 flex flex-col gap-8">
        <Header />
        <main>
            <Form />
        </main>
    </div>
  )
}

export default App
