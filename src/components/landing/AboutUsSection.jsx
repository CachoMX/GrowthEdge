import React from 'react';
import { motion } from "framer-motion";

const team = [
  {
    name: "Joel Davies",
    role: "Founder",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/b1cf7ed2a_dRvIr9eTzBqYKHkIvPW8j2f8lc.jpeg",
    bio: [
      "The founder of GrowthEdge and a hands-on entrepreneur with a track record of building and scaling multiple successful brands. He's deeply focused on helping businesses unlock more growth from Google—bringing a practical, operator's mindset to acquisition, experimentation, and performance.",
      "He's known for spotting high-leverage opportunities others miss, simplifying complex problems into clear next steps, and pushing for execution that drives measurable results. Whether he's shaping strategy or diving into the details, Joel brings a calm, data-led approach and a strong bias toward action."
    ],
    imagePosition: "right"
  },
  {
    name: "Jack Davies",
    role: "Founder",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/de02a45c4_N5J8vpOxU7xbzz4c5is8mdGJZM.jpeg",
    bio: [
      "With 8 years experience in ecommerce from the early days of the industry, to running a 7-figure high-ticket reselling store, Jack's path has led to the birth of GrowthEdge. Seeing an opportunity in the space for someone who has truly grown their own brand to enter the agency scene and do things differently.",
      "Outside of this with any spare time, Jack spends time attending Richmond games, travelling with his wife, and collecting 4k movies."
    ],
    imagePosition: "left"
  }
];

export default function AboutUsSection() {
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
            Meet{' '}
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
              The Owners
            </span>
          </h2>
          <svg style={{ display: 'none' }}>
            <filter id="grizzle">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <p className="text-slate-600 max-w-xl mx-auto">
            Built by entrepreneurs who've scaled brands to millions — and now we help you do the same
          </p>
        </motion.div>

        <div className="space-y-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-64 md:w-40 h-80 md:h-48 rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="font-semibold text-base mb-4" style={{ color: '#5A8AC7' }}>
                  {member.role}
                </p>
                
                <div className="space-y-3">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}