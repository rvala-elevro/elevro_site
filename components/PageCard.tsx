"use client";
import { fadeUp, staggerParent } from "@/lib/animation-variants";
import {
  CloudCog,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
interface Cards {
  title: string;
  text: string;
}
const PageCard = ({ cards, page }: { cards: Cards[]; page: string }) => {
  const aboutIcons = [ShieldCheck, CloudCog, Layers3];
  const contactIcons = [Mail, MapPin, Phone];
  const icons = page === "about" ? aboutIcons : contactIcons;
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="grid gap-5"
    >
      {cards.map((item, index) => {
        const Icon = icons[index];

        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="rounded-4xl border border-white/10 bg-white/5 p-5 shadow-soft"
          >
            <Icon className="h-7 w-7 text-[#d79088]" />
            <h3 className="mt-5 text-2xl font-medium text-white/90">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-cream/62">{item.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PageCard;
