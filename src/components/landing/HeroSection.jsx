import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ onBookCall }) {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/gnbxkqnma5.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);
  }, []);

  return (
    <section className="relative flex items-center justify-center px-4 pt-8 pb-6 md:pb-8 overflow-hidden" style={{ minHeight: 'calc(100vh - 120px)', background: 'linear-gradient(to bottom, white 0%, rgba(90, 138, 199, 0.12) 100%)' }}>
      {/* Background gradient orbs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl opacity-30 animate-pulse" style={{ backgroundColor: '#5A8AC7' }} />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl opacity-30 animate-pulse" style={{ backgroundColor: '#5A8AC7', animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-medium text-sm md:text-base tracking-wide mb-6 px-4"
          style={{ color: '#5A8AC7' }}
        >
          <span 
            style={{
              background: 'rgba(90, 138, 199, 0.25)',
              padding: '2px 6px',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\' result=\'desaturated\'/%3E%3CfeComponentTransfer in=\'desaturated\'%3E%3CfeFuncA type=\'linear\' slope=\'0.15\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000000\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
              backgroundBlendMode: 'multiply'
            }}
          >
            For Brands Spending $10K+ Per Month on Google Ads
          </span>
        </motion.p>

        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 px-2"
        >
           We{' '}
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
             Scale
           </span>{' '}
           Your{' '}
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
             Google Ads
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
             Exponentially
           </span>{' '}
           While Your{' '}
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
             ROAS
           </span>{' '}
           Stays{' '}
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
             Dialled
           </span>.
           </motion.h1>
         <svg style={{ display: 'none' }}>
           <filter id="grizzle">
             <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
             <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
           </filter>
         </svg>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 text-sm md:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
        >
          We have driven $150M+ for 200+ brands — from $30k months to $1.3M months.
        </motion.p>

        {/* Video placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-3xl mx-auto mb-6 md:mb-10 shadow-2xl px-2"
        >
          <style>{`wistia-player[media-id='gnbxkqnma5']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gnbxkqnma5/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
          <wistia-player media-id="gnbxkqnma5" aspect="1.7777777777777777"></wistia-player>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto px-4"
        >
          <Button 
            onClick={onBookCall}
            size="lg"
            className="w-full py-6 md:py-8 text-base md:text-lg font-semibold rounded-full transition-all group relative overflow-hidden border border-white/30"
            style={{
              background: 'rgba(90, 138, 199, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              color: 'white',
              boxShadow: '0 8px 32px 0 rgba(90, 138, 199, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
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
          <p className="text-slate-500 text-sm mt-3">*Quick 30 Second Application*</p>
        </motion.div>
      </div>
    </section>
  );
}