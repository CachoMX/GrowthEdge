import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MousePointerClick, 
  Search, 
  BarChart3, 
  Settings, 
  Users, 
  Target, 
  Layers,
  CheckCircle2
} from "lucide-react";

const offerItems = [
  {
    icon: Search,
    title: "Full Google & YouTube Ads Account Audit & Cleanup",
    description: "Comprehensive analysis of your current setup to identify quick wins and optimization opportunities"
  },
  {
    icon: BarChart3,
    title: "Complete Google Keyword, Market & Competitor Research",
    description: "Deep dive into your category to see what competitors are doing — and build a strategy that positions your brand to win"
  },
  {
    icon: Settings,
    title: "Complete Google & YouTube Ads Campaign Buildout",
    description: "A tailored campaign structure built specifically around your products, margins, and customer journey - not a cookie-cutter template"
  },
  {
    icon: Users,
    title: "Expert-Led Campaign Management for 30 Days",
    description: "Hands-on execution from day one, with senior media buyers managing and optimizing your account end-to-end"
  },
  {
    icon: Target,
    title: "80/20 Scaling Framework",
    description: "We identify your highest-performing campaigns, products, and keywords — then put 80% of spend behind them while 20% tests new opportunities"
  },
  {
    icon: Layers,
    title: "Google & YouTube Creative Growth Framework",
    description: "We roll out your top creatives across Google's ecosystem — YouTube, Display, Shopping, and Search — managing it end-to-end"
  }
];

export default function OfferSection({ onBookCall }) {
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
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6" style={{ backgroundColor: '#EFF4FF', color: '#5A8AC7' }}>
            Here's Our Offer To You
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-4 md:px-0">
            How We Double Your Revenue With Ads<br />
            <span className="relative inline-block">
              <span 
                className="absolute inset-0 -z-10"
                style={{
                  background: '#5A8AC7',
                  opacity: 0.25,
                  filter: 'url(#grizzle)',
                  left: '-6px',
                  right: '-6px',
                  top: '-3px',
                  bottom: '-3px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\' result=\'desaturated\'/%3E%3CfeComponentTransfer in=\'desaturated\'%3E%3CfeFuncA type=\'linear\' slope=\'0.15\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000000\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'repeat'
                }}
              />
              Launched In 3 Days
            </span>
          </h2>
          <svg style={{ display: 'none' }}>
            <filter id="grizzle">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <p className="text-slate-600 max-w-2xl mx-auto px-4">
            Everything is completely Done For You. Here is everything handled in our offer for you.
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {offerItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-slate-200/50 group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:transition-colors" style={{ backgroundColor: '#EFF4FF', color: '#5A8AC7' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#5A8AC7' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors" style={{ color: 'inherit' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 px-4">
            Ready to get started?
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-base md:text-lg px-4">
            Apply below for a quick consultation with our team.
          </p>
          <Button 
            onClick={onBookCall}
            size="lg"
            className="px-10 py-7 text-lg font-semibold rounded-full transition-all group border border-white/30"
            style={{
              background: 'rgba(90, 138, 199, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              color: 'white',
              boxShadow: '0 8px 32px 0 rgba(90, 138, 199, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)'
            }}
          >
            <span className="flex items-center justify-center gap-3">
              Book A Strategy Call
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <MousePointerClick className="w-6 h-6" strokeWidth={2.5} />
              </motion.div>
            </span>
          </Button>
          <p className="text-slate-500 text-xs mt-4">*30 Second Application*</p>
        </motion.div>
      </div>
    </section>
  );
}