import React from 'react';
import { motion } from "framer-motion";
import { DollarSign, Building2, TrendingUp, Zap } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "$150M+",
    label: "Revenue Generated",
    color: "text-green-500"
  },
  {
    icon: Building2,
    value: "50+",
    label: "Brands Rebuilt",
    color: "text-blue-500"
  },
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Average ROAS Improvement",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    value: "3",
    label: "Days to Full Implementation",
    color: "text-amber-500"
  }
];

export default function PerformanceMetricsSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f5f7fb' }}>
      <svg style={{ display: 'none' }}>
        <filter id="grizzleMetrics">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Performance{' '}
            <span className="relative inline-block">
              <span 
                className="absolute inset-0 -z-10"
                style={{
                  background: '#5A8AC7',
                  opacity: 0.25,
                  filter: 'url(#grizzleMetrics)',
                  left: '-6px',
                  right: '-6px',
                  top: '-3px',
                  bottom: '-3px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\' result=\'desaturated\'/%3E%3CfeComponentTransfer in=\'desaturated\'%3E%3CfeFuncA type=\'linear\' slope=\'0.15\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000000\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'repeat'
                }}
              />
              By The Metrics
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Numbers that demonstrate our commitment to delivering real, measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6 flex justify-center"
              >
                <metric.icon className={`w-12 h-12 ${metric.color}`} />
              </motion.div>
              <motion.h3 
                className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2`}
              >
                {metric.value}
              </motion.h3>
              <p className="text-slate-600 text-sm md:text-base">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}