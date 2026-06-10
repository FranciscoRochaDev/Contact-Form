import type { ReactNode } from "react"

type ErrorProps = {
    children: ReactNode
}

export default function Error({ children } : ErrorProps) {

    return (
        <p className="font-karla font-normal text-sm text-errors text-left mt-2">
            {children}
        </p>
    )

}
