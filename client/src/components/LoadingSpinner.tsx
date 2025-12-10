import { motion } from "framer-motion";

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <p className="text-sm text-slate-500 font-medium">Loading...</p>
            </motion.div>
        </div>
    );
}
