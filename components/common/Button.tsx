interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode
}

export function ButtonProps({children, className, ...props}: ButtonProps) {
    <button className={className ? className : "a"} {...props}>{children}</button>
}