"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  immediate?: boolean;
}

export function AnimatedText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
  immediate = false,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-pre">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              {...(immediate
                ? {
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }
                : {
                    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
                    viewport: { once: true, margin: "-50px" },
                  })}
              transition={{
                duration: 0.4,
                delay: delay + wordIndex * 0.05 + charIndex * 0.02,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
