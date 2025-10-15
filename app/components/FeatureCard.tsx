\"use client\";
import { motion } from "framer-motion";

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(122,199,255,0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="p-6 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(122,199,255,0.08)] backdrop-blur-sm"
    >
      <h3 className="text-xl font-medium mb-3 text-highlight">{title}</h3>
      <p className="text-sm text-[rgba(255,255,255,0.85)] leading-relaxed">{description}</p>
      <button className="mt-4 px-4 py-2 rounded-md border border-[rgba(122,199,255,0.2)] hover:bg-[rgba(27,149,224,0.1)] transition">
        Learn more
      </button>
    </motion.div>
  );
}