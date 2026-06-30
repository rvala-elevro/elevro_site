"use client";
import { fadeUp } from "@/app/page";
import { motion } from "motion/react";
import React from "react";
const Card = ({
  children,
  index,
  isNotHover = true,
}: {
  children: React.ReactNode;
  index: number;
  isNotHover?: boolean;
}) => {
  return (
    <motion.div
      key={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      whileHover={!isNotHover ? undefined : { y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5.5 p-6 shadow-soft"
    >
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl transition group-hover:bg-secondary/45" />
      {children}
    </motion.div>
  );
};

export default Card;
