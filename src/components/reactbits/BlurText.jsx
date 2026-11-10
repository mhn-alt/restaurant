import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function BlurText({
  text,
  as: Tag = "h1",
  by = "words",
  delay = 0.08,
  duration = 0.7,
  className,
}) {
  const items = by === "letters" ? text.split("") : text.split(" ");
  return (
    <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block will-change-[filter,opacity,transform]"
          initial={{ filter: "blur(12px)", opacity: 0, y: 24 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration, delay: i * delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {item === " " ? "\u00A0" : item}
          {by === "words" && i < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
