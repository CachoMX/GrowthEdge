import React from 'react';
import { motion } from "framer-motion";
import { DollarSign, Building2, TrendingUp, Zap } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "$150M+",
    label: "Revenue Generated",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Building2,
    value: "50+",
    label: "Brands Rebuilt",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Average ROAS Improvement",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Zap,
    value: "3",
    label: "Days to Full Implementation",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  }
];

export default function MetricsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Performance By The Metrics
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Numbers that demonstrate our commitment to delivering real, measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent rounded-2xl p-6 md:p-8 text-center transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${metric.bgColor} rounded-xl mb-4`}>
                <metric.icon className={`w-7 h-7 ${metric.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <p className="text-slate-600 text-sm font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}