import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CardComponent(props) {
    const isFace = true;
    return (
        <Link to={props.card?.url}>
            <motion.div
                className="relative bottom-0 w-[250px] h-[300px] cursor-pointer "
                style={{ zIndex: props.z ?? "unset"}}
                initial={{ y: 0 }}
                whileHover={{
                    y: -50,
                }}
            >
                <motion.div
                    animate={{
                        filter: props.grayOut ? "contrast(0.55)" : "contrast(1)",
                        transition: {
                            duration: 1.5,
                        },
                    }}
                    className="w-full h-full"
                >
                    <img
                        width={300}
                        height={300}
                        src={props.card?.src}
                        alt={`${props.card?.title} Card`}
                        className={clsx(
                            "select-none w-full h-full object-cover",
                            !props.noShadow && "shadow-lg shadow-zinc-500/40 drop-shadow-xl",
                            isFace && "rounded-lg border-white p-1"
                        )}
                    />
                </motion.div>
                {props.card?.gradients.map((gradient, idx) => (
                    <div
                        key={idx}
                        className={`absolute top-0 w-full h-full bg-black bg-opacity-70 rounded-xl border-4 border-teal-500 z-20 `}
                    ></div>
                ))}
                <div className="absolute top-0 w-full h-full flex justify-center z-30 text-[#F9FFF2] font-sans md:text-base lg:text-lg xl:text-xl 2xl:text-3xl py-5">
                    <div>{props.card?.title}</div>
                </div>
            </motion.div>
        </Link>
    );
}
