import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Masonry({ items, renderItem, className }) {
  return (
    <div className={cn("columns-1 gap-5 sm:columns-2 lg:columns-3", className)}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          className="mb-5 break-inside-avoid"
        >
          {renderItem(item, i)}
        </motion.div>
      ))}
    </div>
  );
}
