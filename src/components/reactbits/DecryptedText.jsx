import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "../../lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*";

export default function DecryptedText({ text, speed = 40, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let revealed = 0;
    const id = setInterval(() => {
      revealed += 1;
      setOut(
        text
          .split("")
          .map((c, i) =>
            c === " " || i < revealed
              ? c
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      if (revealed >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={cn("font-mono", className)} aria-label={text}>
      <span aria-hidden="true">{inView ? out : text.replace(/\S/g, "•")}</span>
    </span>
  );
}
