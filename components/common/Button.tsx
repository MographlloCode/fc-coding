interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode
}

export function Button({children, className, ...props}: ButtonProps) {
    return <button className={`cursor-pointer ${className ? className : ""}`} {...props}>{children}</button>
}