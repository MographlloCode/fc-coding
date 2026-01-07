import {motion, AnimatePresence} from 'motion/react'

interface BackdropBlurProps {
    children: React.ReactNode
}

export function BackdropBlur({children}: BackdropBlurProps) {
    return <AnimatePresence>
        <motion.div
            key="backdrop-blur"
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed w-screen h-screen backdrop-blur-md bg-zinc-950/80 flex items-center justify-center z-50"
        >
            {children}
        </motion.div>
    </AnimatePresence>
}