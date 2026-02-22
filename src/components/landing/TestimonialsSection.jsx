import React from 'react';
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ryan",
    company: "Indoor Golf Outlet",
    quote: "They helped us go from 600k to 1.2M in 30 days. Absolutely incredible results.",
    result: "600k → $1.2M in 30 days",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    name: "Veeti",
    company: "The Sauna Heater",
    quote: "Scaled from $392K to $700K Monthly Revenue Using Google & YouTube Ads",
    result: "$392K → $700K/mo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
  },
  {
    name: "Sean",
    company: "SHS",
    quote: "Doubled Revenue within 2 months, Quadrupled Revenue within 4 months and have recommended them to 2 more businesses.",
    result: "4x Revenue in 4 months",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  },
  {
    name: "Medical Brand",
    company: "Morelli Medical",
    quote: "Premium Medical Brand Scaled From 220k/mo to 500k/mo through Google Ads alone",
    result: "$220K → $500K/mo",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80"
  }
];

export default function TestimonialsSection() {
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
              Unfiltered.
            </span>{' '}
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
              Unscripted.
            </span>{' '}
            Straight From Our Clients.
          </h2>
          <svg style={{ display: 'none' }}>
            <filter id="grizzle">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <p className="text-slate-600 max-w-xl mx-auto">
            Don't just take our word for it — hear from the brands we've helped scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all group"
            >
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
                <Quote className="w-8 h-8 text-indigo-200 ml-auto" />
              </div>
              
              <div className="relative bg-[#007AFF] text-white rounded-[18px] p-4 mb-6 leading-relaxed">
                <svg className="absolute bottom-0 -right-[5px]" width="20" height="25" viewBox="0 0 20 25">
                  <path d="M 0 0 C 0 5, 5 10, 10 15 C 12 17, 15 20, 20 25 L 0 25 Z" fill="#007AFF" />
                </svg>
                "{testimonial.quote}"
              </div>
              
              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full">
                  {testimonial.result}
                </span>
                <button className="flex items-center gap-2 text-indigo-500 text-sm font-medium hover:text-indigo-600 transition-colors group-hover:gap-3">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Watch Video
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}