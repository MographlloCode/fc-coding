import { motion, AnimatePresence } from "motion/react"

interface SidebarItemTitleProps {
    title: string
    sidebarOpen: boolean
}

export function SidebarItemTitle({title, sidebarOpen}: SidebarItemTitleProps) {
    return <AnimatePresence>
        {sidebarOpen && (
            <motion.h1
                key="sidebar-title"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-zinc-400 group-hover:text-indigo-400 whitespace-nowrap leading-1"
            >
                {title}
            </motion.h1>
        )}
        </AnimatePresence>
}