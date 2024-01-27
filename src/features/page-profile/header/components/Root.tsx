interface RootProps{
    children:React.ReactNode
}
export function Root({children}:RootProps) {
    return(
        <header className="backgroundHeaderProfile w-full h-48"
>           {children}
        </header>
    )
}

