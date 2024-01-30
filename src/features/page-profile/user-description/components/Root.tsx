import React from "react"

interface RootPros{
    children:React.ReactNode
}
export function Root({children}:RootPros) {
    return(
        <section className="flex flex-col items-center justify-center  gap-7 mb-7">
            {children}
        </section>

    )
}