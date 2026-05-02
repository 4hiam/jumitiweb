import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  delay?: number;
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
}

export function Card({ title, children, delay = 0, icon, image, imageAlt }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-sand/10 transition-all duration-300 border border-gray-100 flex flex-col h-full group overflow-hidden"
    >
      {image && (
        <div className="w-full aspect-[4/3] overflow-hidden rounded-t-[32px]">
          <img
            src={image}
            alt={imageAlt ?? title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        {icon && <div className="mb-4 text-olive">{icon}</div>}
        <h3 className="text-2xl font-semibold mb-4 text-olive">{title}</h3>
        <div className="text-gray-600 leading-relaxed font-sans">{children}</div>
      </div>
    </motion.div>
  );
}
