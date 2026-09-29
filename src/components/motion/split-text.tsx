"use client";

import { Fragment } from "react";
import { m } from "framer-motion";
import { EASE_OUT } from "./reveal";

type Part = { text: string; className?: string };

export default function SplitText({
    parts,
    className = "",
    delay = 0,
    stagger = 0.07,
}: {
    parts: Part[];
    className?: string;
    delay?: number;
    stagger?: number;
}) {
    const words = parts.flatMap((part) =>
        part.text
            .split(" ")
            .filter(Boolean)
            .map((word) => ({ word, className: part.className ?? "" }))
    );

    return (
        <m.span
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
        >
            <span className="sr-only">{parts.map((part) => part.text).join("")}</span>
            <span aria-hidden="true">
                {words.map(({ word, className: wordClassName }, i) => (
                    <Fragment key={i}>
                        <span className="inline-block [perspective:700px]">
                            <m.span
                                className={`inline-block origin-bottom ${wordClassName}`}
                                variants={{
                                    hidden: { opacity: 0, y: "0.45em", rotateX: -85 },
                                    show: {
                                        opacity: 1,
                                        y: "0em",
                                        rotateX: 0,
                                        transition: { duration: 0.85, ease: EASE_OUT },
                                    },
                                }}
                            >
                                {word}
                            </m.span>
                        </span>
                        {i < words.length - 1 && " "}
                    </Fragment>
                ))}
            </span>
        </m.span>
    );
}
