"use client";

import { motion } from "framer-motion";
import ThemeSwitcher from "../theme-switcher";

export default function Navigation() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                bottom: -32,
            }}
            animate={{
                opacity: 1,
                bottom: 34,
            }}
            exit={{
                opacity: 0,
                bottom: -32,
            }}
            transition={{
                ease: [0.19, 1, 0.22, 1],
                duration: 0.4,
                delay: 0.5,
            }}
            className="-translate-x-1/2 fixed left-1/2 transform text-small"
        >
            <div className="flex flex-row items-center gap-2 py-2">
                {/* <Button variant="outline" size="icon">
                    <DotIcon className="w-4 h-4" />
                </Button> */}
                <ThemeSwitcher />
                {/* <Button variant="outline" size="icon">
                    <DotIcon className="w-4 h-4" />
                </Button> */}
            </div>
        </motion.div>
    );
}
