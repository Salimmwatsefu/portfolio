import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CardComponent from "./CardComponent";

import { Dices } from "lucide-react";
import Hero2 from "./Hero2";
import Hero from "./Hero";

export default function Hero3() {
    
    return (

        <div>
            <div className="hidden md:block">
                <Hero2 />

            </div>

            <div className="block md:hidden">

                <Hero />

            </div>
        </div>
    )

}
