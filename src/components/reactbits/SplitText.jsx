import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SplitText({
  text,
  as: Tag = "h2",
  className,
  delay = 0.03,
  stiffness = 120,
}) {
  const words = text.split(" ");
  let count = 0;
  return (
    <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          className="inline-block overflow-hidden whitespace-nowrap pb-[0.12em] mr-[0.28em]"
        >
          {word.split("").map((ch, ci) => {
            const idx = count++;
            return (
              <motion.span
                key={ci}
                className="inline-block"
                initial={{ y: "110%", opacity: 0, rotate: 6 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness,
                  damping: 18,
                  delay: idx * delay,
                }}
              >
                {ch}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
