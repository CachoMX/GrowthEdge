import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudyCard({ 
  caseNumber, 
  title, 
  subtitle, 
  description, 
  fromValue, 
  toValue, 
  timeframe,
  proofImage,
  proofImage2,
  proofVideo,
  beforeImage,
  afterImage,
  testimonialImage,
  hideTestimonialLabel = false,
  index = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-transparent rounded-2xl overflow-hidden transition-all duration-300 group"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Content */}
        <div className={`flex-1 lg:w-3/5 ${caseNumber === 9 ? 'p-6 md:p-6' : 'p-6 md:p-6 lg:pr-4'}`}>
          <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 transition-colors leading-tight">
            {(() => {
              const titleText = title.replace(/\n/g, ' ');
              
              const highlightMoney = (text) => {
                const patterns = [
                  /^Straight/g,
                  /\$158K\s+Revenue\s+in\s+4\s+Months/g,
                  /\$208K\s*→\s*\$427K/g,
                  /\$163K\s+Spend\s*→\s*\$587K\s+Revenue/g,
                  /\$445K\s+→/g,
                  /\$2\.93M\s+Over\s+7\s+Months/g,
                  /\$39K\s+to\s+\$1\.3M\s+Monthly/g,
                  /\$1\.3M\s+Monthly\s+Revenue/g,
                  /\$39K\s+to$/g,
                  /\$1\.86M\s+→\s+\$27\.2M/g,
                  /\$101K\s+→\s+\$386K/g,
                  /\$145K\s+→\s+\$1\.2M/g,
                  /Generated\s+\$1\.34M\s+Revenue/g,
                  /\$1\.24M\s+Total\s+Revenue\s+\(\+106%\)/g,
                  /\$198K\s+→\s+\$1\.74M/g,
                  /\$367K\s+→\s+\$800K/g,
                  /\$5\.06M\s+Revenue/g,
                  /\$524K\s+Spend\s+→/g,
                  /\$187K\s+→\s+\$1\.67M\s+\(8\.9x\s+ROAS\)/g,
                  /\$[\d,.]+[KMB]?\s+to\s+\$[\d,.]+[KMB]?\s+Monthly\s+Revenue/g,
                  /\$[\d,.]+[KMB]?\s*→\s*\$[\d,.]+[KMB]?\s+in\s+\d+\s+Months\s*\|/g,
                  ...(caseNumber === 13 ? [] : [
                    /→\s*\$[\d,.]+[KMB]?\s+Revenue\s+in\s+\d+\s+Months\s+From\s+Scratch\s+\([\d,.]+x\s+ROAS\)/g,
                    /\$[\d,.]+[KMB]?\s+Revenue\s+in\s+\d+\s+Months\s+From\s+Scratch\s+\([\d,.]+x\s+ROAS\)/g,
                  ]),

                  /\$[\d,.]+[KMB]?\s+Spend\s*→\s*\$[\d,.]+[KMB]?\s+Revenue\s*\|\s*[\d,.]+x\s+ROAS/g,
                  /\$[\d,.]+[KMB]?\s+Spend\s*→\s*\$[\d,.]+[KMB]?\s+Revenue\s*\([\d,.]+x\s+ROAS\)/g,
                  /\$[\d,.]+[KMB]?\s+—?\s*Spend\s*→\s*\$[\d,.]+[KMB]?\s+Revenue/g,
                  /\$[\d,.]+[KMB]?\s+Revenue\s+\([\d,.]+x\s+ROAS\)/g,
                  /\$[\d,.]+[KMB]?\s*→\s*\$[\d,.]+[KMB]?\s*\|\s*[\d,.]+x\s+ROAS/g,
                  /While\s+Growing\s+Total\s+Revenue\s+to\s+\$[\d,.]+[KMB]?\s+\(\+[\d,]+%\)\s+in\s+\d+\s+\w+/g,
                  /\$[\d,.]+[KMB]?\s*→\s*\$[\d,.]+[KMB]?\s+Monthly/g,
                  /\$2\.73M\s+in\s+a\s+Single\s+Month/g,
                  /→\s*\$[\d,.]+[KMB]?\s+Revenue(?:\s+\||$)/g,
                  /→\s*\$[\d,.]+[KMB]?\s*\([\d,.]+x\s+ROAS\)/g,
                  /\$[\d,.]+[KMB]?\s+in\s+a\s+Single\s+Month/g,
                  /\$[\d,.]+[KMB]?\s+\(\+[\d,]+%\)/g,
                  /\$[\d,.]+[KMB]?\s+\w+\s+\w+\s+\$[\d,.]+[KMB]?\s+Revenue\s+\([\d,.]+x\s+ROAS\)/g
                ];
                
                let bestMatch = null;
                let bestPattern = null;
                
                for (const pattern of patterns) {
                  pattern.lastIndex = 0;
                  const match = pattern.exec(text);
                  if (match) {
                    const matchStart = match.index;
                    if (!bestMatch || matchStart < bestMatch.index) {
                      bestMatch = match;
                      bestPattern = pattern;
                    }
                  }
                }
                
                if (!bestMatch) {
                   const parts = text.split(/(\$[\d,.]+[KMB]?)/g);
                   return parts.map((part, idx) => {
                     if (/^\$[\d,.]+[KMB]?$/.test(part)) {
                      return (
                        <span key={idx} className="relative inline">
                          <span 
                            className="absolute inset-0 -z-10"
                            style={{
                              background: '#5A8AC7',
                              opacity: 0.25,
                              left: '0px',
                              right: '0px',
                              top: '-3px',
                              bottom: '-3px',
                              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\' result=\'desaturated\'/%3E%3CfeComponentTransfer in=\'desaturated\'%3E%3CfeFuncA type=\'linear\' slope=\'0.15\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000000\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                              backgroundSize: '100% 100%',
                              backgroundRepeat: 'repeat'
                            }}
                          />
                          {part}
                        </span>
                      );
                    }
                    return part;
                  });
                }
                
                const match = bestMatch[0];
                const result = [];
                
                result.push(text.substring(0, bestMatch.index));
                
                let highlightText = match;
                let afterText = '';
                if (match.endsWith(' in')) {
                  highlightText = match.slice(0, -3);
                  afterText = ' in';
                }
                
                result.push(
                  <span key={`highlight-${bestMatch.index}`} className="relative inline">
                    <span 
                      className="absolute inset-0 -z-10"
                      style={{
                        background: '#5A8AC7',
                        opacity: 0.25,
                        left: '0px',
                        right: '0px',
                        top: '-3px',
                        bottom: '-3px',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\' result=\'desaturated\'/%3E%3CfeComponentTransfer in=\'desaturated\'%3E%3CfeFuncA type=\'linear\' slope=\'0.15\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000000\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'repeat'
                      }}
                    />
                    {highlightText}
                  </span>
                );
                if (afterText) result.push(afterText);
                
                result.push(text.substring(bestMatch.index + match.length));
                return result.filter(x => x !== '');
              };

              
              return highlightMoney(titleText);
            })()}
          </h3>
          <svg style={{ display: 'none' }}>
            <filter id="grizzle">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          
          <p className="font-medium text-sm mb-4" style={{ color: '#5A8AC7' }}>{subtitle}</p>
          
          {description && (
            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
              {description.split('. ').filter(point => point.trim()).map((point, idx) => (
                <li key={idx}>{point.trim().replace(/\.$/, '')}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Stacked Images */}
        {(proofImage || proofVideo || beforeImage || testimonialImage) && (
          <div className="flex-1 lg:w-2/5 p-4 lg:pl-4 lg:pr-6 lg:py-6 bg-transparent flex flex-col gap-4">
            {beforeImage && afterImage ? (
              <div className="flex-1 lg:flex-none">
                <p className="text-xs text-slate-600 uppercase tracking-wide mb-2 font-semibold">Results Proof</p>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={beforeImage} 
                      alt="Before results"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex-shrink-0 py-2">
                    <ArrowRight className="w-6 h-6 rotate-90" style={{ color: '#5A8AC7' }} />
                  </div>
                  <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={afterImage} 
                      alt="After results"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ) : proofVideo && caseNumber !== 1 ? (
              <div className="flex-1 lg:flex-none lg:w-full lg:max-w-4xl">
                <p className="text-xs text-slate-600 uppercase tracking-wide mb-3 font-semibold">Client Testimonial</p>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full" style={{ aspectRatio: '16 / 9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={proofVideo}
                    title="Client Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            ) : proofImage && caseNumber !== 1 && (
              <div className="flex-1 lg:flex-none lg:w-full">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full">
                    <img 
                      src={proofImage} 
                      alt="Results proof"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {proofImage2 && (
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img 
                        src={proofImage2} 
                        alt="Additional results proof"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {testimonialImage && (
              <div className="flex-1 lg:flex-none">
                {!hideTestimonialLabel && (
                  <p className="text-xs text-slate-600 uppercase tracking-wide mb-2 font-semibold">💬 Client Testimonial</p>
                )}
                <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${caseNumber === 1 ? 'h-auto' : 'h-40 lg:h-44'}`}>
                  {caseNumber === 1 ? (
                    <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                      <iframe
                        src="https://player.vimeo.com/video/1164842822?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                        title="Client Testimonial"
                      />
                    </div>
                  ) : (
                    <img 
                      src={testimonialImage} 
                      alt="Client testimonial"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}