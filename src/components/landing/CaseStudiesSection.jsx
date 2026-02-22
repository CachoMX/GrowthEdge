import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

const ClickingHand = () => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85, y: 2 }}
    className="inline-block"
  >
    <Hand className="w-5 h-5" />
  </motion.div>
);
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    caseNumber: 1,
    title: "Indoor Golf Outlet: $1.86M → $27.2M | 14.6x ROAS\nOver 19 Months",
    subtitle: "Consistently scaled $600K to $4M+ monthly over 19 months",
    description: "Consistently scaled from $600K to $4M+ monthly revenue over 19 months — 70% driven by Google Ads. High AOV account scaled exclusively through Google Shopping with strategic product segmentation.",
    fromValue: "$1.86M",
    toValue: "$27.2M",
    timeframe: "19 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ff1a5acfa_image.png",
    testimonialImage: "https://cdn.gamma.app/c4u9k0hhxbrq5tg/b043e65cba3a447bb18386e3ed307ffb/original/image-24.png"
  },
  {
    caseNumber: 2,
    title: "Subscription Brand: $208K → $427K in 30 Days via\nGoogle Demand Gen Image/Video Ads | 2.05x ROAS",
    subtitle: "Demand Gen Strategy: 7 active campaigns, all profitable",
    description: "Diversified Demand Gen strategy: 7 active campaigns all maintaining profitability. $208K monthly spend across image/video ads generating $427K revenue. Top performer at 2.13x ROAS ($106K → $227K from TOF campaign).",
    fromValue: "$208K",
    toValue: "$427K",
    timeframe: "30 Days",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/05419ba21_Screenshot2026-02-15at32209pm.png"
  },
  {
    caseNumber: 3,
    title: "Health Brand: $623K Google Ads Spend\nGenerated $1.34M Revenue (2.14x ROAS) in 30 Day Period",
    subtitle: "Monthly performance at significant scale",
    description: "Monthly performance: $623K spend → $1.34M revenue via Google Ads. Health/wellness brand maintaining 2.14x ROAS at significant scale. Sustainable growth: 6-figure ad spend generating 7-figure monthly revenue.",
    fromValue: "$623K",
    toValue: "$1.34M",
    timeframe: "30 Days",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/d9019f7e7_image.png"
  },
  {
    caseNumber: 4,
    title: "Supplement Brand: Aggressively Scaled from $39K to $1.3M Monthly Revenue via Google Ads | 34x Growth in 4 Months",
    subtitle: "Aggressively scaled spend while maintaining profitability",
    description: "Feb performance vs June 2025: Scaled monthly revenue from $39K to $1.3M through Google Ads (34x growth). Aggressively increased spend from $11.7K to $623K/month while maintaining profitability. E-commerce brand: Massive revenue scaling demonstrating Google Ads as primary growth channel.",
    fromValue: "$39K/mo",
    toValue: "$1.3M/mo",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/0e4315aa1_image.png"
  },
  {
    caseNumber: 5,
    title: "Krush Kandy: $101K → $386K in 4 Months |\n3.8x ROAS",
    subtitle: "Cut acquisition costs 27% while scaling 4x revenue",
    description: "4-month performance: 142K clicks, 382% ROAS (up 103% vs prior period). Cut acquisition costs 27% while scaling spend from $38K to $101K. Fashion brand growth through targeted Google Ads strategy.",
    fromValue: "$101K",
    toValue: "$386K",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/4a78e7325_image.png"
  },
  {
    caseNumber: 6,
    title: "Matte Collection: $145K → $1.2M in 10 Weeks |\n8.27x ROAS",
    subtitle: "Maintained 8x+ ROAS while scaling aggressively",
    description: "Aggressive 10-week scale: Increased spend by $70.9K while maintaining 8x+ ROAS. 316K clicks generated (up 184K from previous period). Sustained high performance at $13.23 cost per conversion during rapid growth phase. Average order value increased by over 100 percent.",
    fromValue: "$145K",
    toValue: "$1.2M",
    timeframe: "10 Weeks",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/b7de8e501_image.png"
  },
  {
    caseNumber: 7,
    title: "Fashion Brand: Unlocked $681K in New Customer\nRevenue (+162%) | $1.24M Total Revenue (+106%) in 65 Days",
    subtitle: "Solved new customer scaling problem with Google Ads",
    description: "Solved new customer scaling problem: 162% revenue growth from new buyers ($681K). Overall performance: 96% spend increase → 106% revenue increase ($1.24M). Fashion brand breakthrough: New customer acquisition channel unlocked via Google Ads.",
    fromValue: "Can't Scale",
    toValue: "$681K New",
    timeframe: "65 Days",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/97ded66ea_image.png"
  },
  {
    caseNumber: 8,
    title: "Premium Saunas: $198K → $1.74M Over 5 Months |\n8.8x ROAS using Google Ads",
    subtitle: "Doubled Shopify revenue while maintaining profitability",
    description: "More than doubled Shopify revenue in 6 months — scaling from ~$330K/month to ~$760K/month using Google Ads as the primary growth engine. Scaled Shopify revenue while maintaining profitable 8–11× ROAS at scale.",
    fromValue: "$198K",
    toValue: "$1.74M",
    timeframe: "5 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/c1c4b0f53_image.png"
  },
  {
    caseNumber: 9,
    title: "The Sauna Heater: $367K → $800K Monthly |\n118% Growth",
    subtitle: "Scaled to consistent $800K+ monthly in 3 months",
    description: "Scaled The Sauna Heater from $367K to $800K+ monthly revenue in just 3 months using Google Ads. Achieved consistent 800K+ month revenues through strategic cold traffic optimization.",
    fromValue: "$367k/mo",
    toValue: "$800k/mo",
    timeframe: "3 Months",
    proofVideo: "https://www.loom.com/embed/b1223893548949cf99b52c1e80552c46"
  },

  {
    caseNumber: 11,
    title: "Off-Grid Source: $524K Spend → $5.06M Revenue |\n9.64x ROAS",
    subtitle: "Annual results with consistent 9-10x returns throughout",
    description: "Annual results: $5.06M revenue from $524K ad spend (9.64x ROAS). Steady scaling throughout 2025 with consistent 9-10x returns. Off-grid product retailer: High-efficiency Google Ads performance year-round.",
    fromValue: "$524K",
    toValue: "$5.06M",
    timeframe: "12 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ff1a5acfa_image.png"
  },
  {
    caseNumber: 12,
    title: "Home Improvement Brand: $445K → $2.93M Over\n7 Months | 6.6x ROAS",
    subtitle: "Jun-Dec 2025: 252K clicks generating consistent profits",
    description: "Jun-Dec 2025: $2.93M revenue from $445K ad spend (6.6x ROAS). 252K clicks generated across home improvement product campaigns. Steady performance: Maintained profitability throughout second half of 2025.",
    fromValue: "$445K",
    toValue: "$2.93M",
    timeframe: "7 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/396c00f0c_image.png"
  },
  {
    caseNumber: 13,
    title: "Tavo Sleep: No Google Ads Presence → $158K\nRevenue in 4 Months From Scratch (2.78x ROAS)",
    subtitle: "Built profitable channel from ground zero in 4 months",
    description: "Previously not using Google Ads — built profitable channel from ground zero. 4-month launch period: $158K revenue at 2.78x ROAS. Established sustainable acquisition channel for sleep products brand.",
    fromValue: "No Presence",
    toValue: "$158K",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/50561943e_image.png"
  },
  {
    caseNumber: 14,
    title: "Sleep by Santi: Steady Growth — $163K Spend →\n$587K Revenue (3.6x ROAS)",
    subtitle: "4-month consistent scale with steady upward performance",
    description: "4-month consistent scale: $163K → $587K with 3.6x ROAS. 101K clicks driving steady conversion growth month-over-month. Sustainable scaling: No volatility, just steady upward performance.",
    fromValue: "$163K",
    toValue: "$587K",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/8ce2d0d58_image.png"
  },
  {
    caseNumber: 15,
    title: "Fire Company: Aggressive 6-Month Scale — $187K\n→ $1.67M (8.9x ROAS)",
    subtitle: "Maintained efficiency during rapid 6-month growth phase",
    description: "6-month aggressive scale: Increased spend $151K while growing revenue $1.26M. $187K investment generated $1.67M (8.9x ROAS) maintaining efficiency during rapid growth. 102K clicks (+74.2K) driving massive conversion volume increase.",
    fromValue: "$187K",
    toValue: "$1.67M",
    timeframe: "6 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/a3ac0425c_image.png"
  },
  {
    caseNumber: 16,
    title: "Record-Breaking November 2025: $2.73M in a\nSingle Month",
    subtitle: "Highest revenue month ever via Google Shopping",
    description: "November 2025: Highest revenue month ever — $2.73M from Google Shopping on $169K spend (16x ROAS). High-ticket reseller scaled exclusively through mass product segmentation via Google Shopping.",
    fromValue: "$169K",
    toValue: "$2.73M",
    timeframe: "1 Month",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ef4551600_image.png"
  }
];

export default function CaseStudiesSection({ onBookCall }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 whitespace-normal md:whitespace-nowrap relative inline-block px-4 md:px-0">
            The Brands We Are Scaling.{' '}
            <span className="relative inline-block">
              <span 
                className="absolute inset-0 -z-10"
                style={{
                  background: '#5A8AC7',
                  opacity: 0.25,
                  filter: 'url(#grizzle)',
                  left: '-8px',
                  right: '-8px',
                  top: '-4px',
                  bottom: '-4px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\' result=\'desaturated\'/%3E%3CfeComponentTransfer in=\'desaturated\'%3E%3CfeFuncA type=\'linear\' slope=\'0.15\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000000\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'repeat'
                }}
              />
              The Numbers They Hit.
            </span>
          </h2>
          <svg style={{ display: 'none' }}>
            <filter id="grizzle">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <div key={study.caseNumber}>
              {index % 2 === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="py-8"
                >
                  <Button 
                    onClick={onBookCall}
                    className="w-full py-6 font-semibold rounded-full transition-all group border border-white/30"
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
                </motion.div>
              )}
              <CaseStudyCard {...study} index={index} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Button 
            onClick={onBookCall}
            className="w-full max-w-lg px-8 py-6 text-lg font-semibold rounded-full transition-all group border border-white/30"
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
          <p className="text-slate-500 text-sm mt-3">*Quick 30 Second Application*</p>
        </motion.div>
      </div>
    </section>
  );
}