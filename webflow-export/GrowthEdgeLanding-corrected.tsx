import React, { useState, useEffect } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0' result='desaturated'/%3E%3CfeComponentTransfer in='desaturated'%3E%3CfeFuncA type='linear' slope='0.15'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23000000' filter='url(%23noise)'/%3E%3C/svg%3E")`;

const FULL_NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

const highlightStyle: React.CSSProperties = {
  background: '#5A8AC7',
  opacity: 0.25,
  left: '-6px',
  right: '-6px',
  top: '-3px',
  bottom: '-3px',
  backgroundImage: NOISE_TEXTURE,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
};

const highlightStyleWide: React.CSSProperties = {
  background: '#5A8AC7',
  opacity: 0.25,
  left: '-8px',
  right: '-8px',
  top: '-4px',
  bottom: '-4px',
  backgroundImage: NOISE_TEXTURE,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
};

const cardHighlightStyle: React.CSSProperties = {
  background: '#5A8AC7',
  opacity: 0.25,
  left: '0px',
  right: '0px',
  top: '-3px',
  bottom: '-3px',
  backgroundImage: NOISE_TEXTURE,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
};

const ctaButtonStyle: React.CSSProperties = {
  background: 'rgba(90, 138, 199, 0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: 'white',
  boxShadow: '0 8px 32px 0 rgba(90, 138, 199, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)',
};

const logos = [
  { name: "The Great Fire Company", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/4682b250a_logo_white_2.png" },
  { name: "Calming Co", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/da6c1c406_Asset_7_6336b6d1-6aa1-49c5-8ea0-40fbf636787c_1001x255.png" },
  { name: "Indoor Golf Outlet", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/6c42b30d3_Indoor-Golf-Outlet-Logo-White-600x200_a35ad9cd-4ec5-4b6b-8130-bf79b501f677_400x.png" },
  { name: "Krush Kandy", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/3993b9899_Krush_Medium_Banner_US_Landscape.png" },
  { name: "Lyric Cycles", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ec10cbc91_Lyric_Cycles_Vintage_7__white_no_details_500x.png" },
  { name: "Premium Saunas", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/c53bb2455_new-logo-premium-saunas_600x.png" },
  { name: "Off-Grid Source", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ddc71b32d_image.png" },
  { name: "Garmin", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/229d91707_pngimg_com_-_garmin_PNG7.png" },
  { name: "Royal Fire Pits", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/cef8be0d6_Royal_Fire_Pits_Logo_No_Background_600x125_px__1_.png" },
  { name: "Sauna Heaters", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/992ac3ef7_Screenshot_2024-12-04_at_1_09_40_pm.png" },
  { name: "Sleep by Santi", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/efc02a056_SleepBySanti_White_250x_2x.png" },
  { name: "TAVO", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/286530eea_TAVOlabels_all_2-07_eb3dfd3a-53cc-44a1-9cbc-d383a1913dfe.png" },
  { name: "VitalTrack", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ee443bc2b_vitallogo.png" },
  { name: "Yerba Magic", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/1053d16ae_White_Logo_Checkout_3_b78bb9d9-9a1a-4f36-900d-b4082364124d.png" },
  { name: "STRIDE", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ae5c31af1_STRIDE_logo.png" },
  { name: "Daily Dose", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/af12a2050_Daily_Dose_logo.png" },
  { name: "Fernes", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/8bac5ce09_fernes_logo1.png" },
  { name: "MATTE Collection", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/e6e3346f1_MATTE_Collection_logo.png" },
  { name: "Lakewood University", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ecd19cdcf_Lakewood_University_logo.png" },
  { name: "New Client", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/50a808264_image.png" },
];

interface CaseStudy {
  caseNumber: number;
  title: string;
  subtitle: string;
  description: string;
  fromValue: string;
  toValue: string;
  timeframe: string;
  proofImage?: string;
  proofImage2?: string;
  proofVideo?: string;
  beforeImage?: string;
  afterImage?: string;
  testimonialImage?: string;
  hideTestimonialLabel?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    caseNumber: 1,
    title: "Indoor Golf Outlet: $1.86M \u2192 $27.2M | 14.6x ROAS\nOver 19 Months",
    subtitle: "Consistently scaled $600K to $4M+ monthly over 19 months",
    description: "Consistently scaled from $600K to $4M+ monthly revenue over 19 months \u2014 70% driven by Google Ads. High AOV account scaled exclusively through Google Shopping with strategic product segmentation.",
    fromValue: "$1.86M",
    toValue: "$27.2M",
    timeframe: "19 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ff1a5acfa_image.png",
    testimonialImage: "https://cdn.gamma.app/c4u9k0hhxbrq5tg/b043e65cba3a447bb18386e3ed307ffb/original/image-24.png"
  },
  {
    caseNumber: 2,
    title: "Subscription Brand: $208K \u2192 $427K in 30 Days via\nGoogle Demand Gen Image/Video Ads | 2.05x ROAS",
    subtitle: "Demand Gen Strategy: 7 active campaigns, all profitable",
    description: "Diversified Demand Gen strategy: 7 active campaigns all maintaining profitability. $208K monthly spend across image/video ads generating $427K revenue. Top performer at 2.13x ROAS ($106K \u2192 $227K from TOF campaign).",
    fromValue: "$208K",
    toValue: "$427K",
    timeframe: "30 Days",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/05419ba21_Screenshot2026-02-15at32209pm.png"
  },
  {
    caseNumber: 3,
    title: "Health Brand: $623K Google Ads Spend\nGenerated $1.34M Revenue (2.14x ROAS) in 30 Day Period",
    subtitle: "Monthly performance at significant scale",
    description: "Monthly performance: $623K spend \u2192 $1.34M revenue via Google Ads. Health/wellness brand maintaining 2.14x ROAS at significant scale. Sustainable growth: 6-figure ad spend generating 7-figure monthly revenue.",
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
    title: "Krush Kandy: $101K \u2192 $386K in 4 Months |\n3.8x ROAS",
    subtitle: "Cut acquisition costs 27% while scaling 4x revenue",
    description: "4-month performance: 142K clicks, 382% ROAS (up 103% vs prior period). Cut acquisition costs 27% while scaling spend from $38K to $101K. Fashion brand growth through targeted Google Ads strategy.",
    fromValue: "$101K",
    toValue: "$386K",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/4a78e7325_image.png"
  },
  {
    caseNumber: 6,
    title: "Matte Collection: $145K \u2192 $1.2M in 10 Weeks |\n8.27x ROAS",
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
    description: "Solved new customer scaling problem: 162% revenue growth from new buyers ($681K). Overall performance: 96% spend increase \u2192 106% revenue increase ($1.24M). Fashion brand breakthrough: New customer acquisition channel unlocked via Google Ads.",
    fromValue: "Can't Scale",
    toValue: "$681K New",
    timeframe: "65 Days",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/97ded66ea_image.png"
  },
  {
    caseNumber: 8,
    title: "Premium Saunas: $198K \u2192 $1.74M Over 5 Months |\n8.8x ROAS using Google Ads",
    subtitle: "Doubled Shopify revenue while maintaining profitability",
    description: "More than doubled Shopify revenue in 6 months \u2014 scaling from ~$330K/month to ~$760K/month using Google Ads as the primary growth engine. Scaled Shopify revenue while maintaining profitable 8\u201311\u00d7 ROAS at scale.",
    fromValue: "$198K",
    toValue: "$1.74M",
    timeframe: "5 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/c1c4b0f53_image.png"
  },
  {
    caseNumber: 9,
    title: "The Sauna Heater: $367K \u2192 $800K Monthly |\n118% Growth",
    subtitle: "Scaled to consistent $800K+ monthly in 3 months",
    description: "Scaled The Sauna Heater from $367K to $800K+ monthly revenue in just 3 months using Google Ads. Achieved consistent 800K+ month revenues through strategic cold traffic optimization.",
    fromValue: "$367k/mo",
    toValue: "$800k/mo",
    timeframe: "3 Months",
    proofVideo: "https://www.loom.com/embed/b1223893548949cf99b52c1e80552c46"
  },
  {
    caseNumber: 11,
    title: "Off-Grid Source: $524K Spend \u2192 $5.06M Revenue |\n9.64x ROAS",
    subtitle: "Annual results with consistent 9-10x returns throughout",
    description: "Annual results: $5.06M revenue from $524K ad spend (9.64x ROAS). Steady scaling throughout 2025 with consistent 9-10x returns. Off-grid product retailer: High-efficiency Google Ads performance year-round.",
    fromValue: "$524K",
    toValue: "$5.06M",
    timeframe: "12 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ff1a5acfa_image.png"
  },
  {
    caseNumber: 12,
    title: "Home Improvement Brand: $445K \u2192 $2.93M Over\n7 Months | 6.6x ROAS",
    subtitle: "Jun-Dec 2025: 252K clicks generating consistent profits",
    description: "Jun-Dec 2025: $2.93M revenue from $445K ad spend (6.6x ROAS). 252K clicks generated across home improvement product campaigns. Steady performance: Maintained profitability throughout second half of 2025.",
    fromValue: "$445K",
    toValue: "$2.93M",
    timeframe: "7 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/396c00f0c_image.png"
  },
  {
    caseNumber: 13,
    title: "Tavo Sleep: No Google Ads Presence \u2192 $158K\nRevenue in 4 Months From Scratch (2.78x ROAS)",
    subtitle: "Built profitable channel from ground zero in 4 months",
    description: "Previously not using Google Ads \u2014 built profitable channel from ground zero. 4-month launch period: $158K revenue at 2.78x ROAS. Established sustainable acquisition channel for sleep products brand.",
    fromValue: "No Presence",
    toValue: "$158K",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/50561943e_image.png"
  },
  {
    caseNumber: 14,
    title: "Sleep by Santi: Steady Growth \u2014 $163K Spend \u2192\n$587K Revenue (3.6x ROAS)",
    subtitle: "4-month consistent scale with steady upward performance",
    description: "4-month consistent scale: $163K \u2192 $587K with 3.6x ROAS. 101K clicks driving steady conversion growth month-over-month. Sustainable scaling: No volatility, just steady upward performance.",
    fromValue: "$163K",
    toValue: "$587K",
    timeframe: "4 Months",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/8ce2d0d58_image.png"
  },
  {
    caseNumber: 15,
    title: "Fire Company: Aggressive 6-Month Scale \u2014 $187K\n\u2192 $1.67M (8.9x ROAS)",
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
    description: "November 2025: Highest revenue month ever \u2014 $2.73M from Google Shopping on $169K spend (16x ROAS). High-ticket reseller scaled exclusively through mass product segmentation via Google Shopping.",
    fromValue: "$169K",
    toValue: "$2.73M",
    timeframe: "1 Month",
    proofImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/ef4551600_image.png"
  }
];

const slackScreenshots = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/1da2d9fe2_1.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/04a07d5c7_2.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/bb50d1fb3_3.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/fe3c0c3c1_4.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/3a90ccfd7_5.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/45907a6b2_6.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/61cfb53d9_7.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/dd4c2ecdf_8.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/58fb7794f_9.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/3dd449126_10.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/9e6779482_11.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/9a0741cec_12.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/1ef4c6611_13.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/fd36e1bf3_14.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/3dc6108b4_15.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/08845a4df_16.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/aef92f0d8_17.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/771d20281_18.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/8d518977e_19.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/7640830f6_20.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/aaf2bc1ac_21.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/0678ced64_22.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/39cf358c7_23.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/be6cc0cae_24.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/7ebee3410_25.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/bdd6cd366_26.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/9572e2a10_27.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/dbb65e86b_28.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/be682a589_29.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/b391cc676_30.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/aceadadc6_31.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/f1aa23c46_32.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/2cb097e31_33.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/fabd8991a_34.png"
];

const team = [
  {
    name: "Joel Davies",
    role: "Founder",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/b1cf7ed2a_dRvIr9eTzBqYKHkIvPW8j2f8lc.jpeg",
    bio: [
      "The founder of GrowthEdge and a hands-on entrepreneur with a track record of building and scaling multiple successful brands. He\u2019s deeply focused on helping businesses unlock more growth from Google\u2014bringing a practical, operator\u2019s mindset to acquisition, experimentation, and performance.",
      "He\u2019s known for spotting high-leverage opportunities others miss, simplifying complex problems into clear next steps, and pushing for execution that drives measurable results. Whether he\u2019s shaping strategy or diving into the details, Joel brings a calm, data-led approach and a strong bias toward action."
    ]
  },
  {
    name: "Jack Davies",
    role: "Founder",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69896edb8c6aa7e8462b7a54/de02a45c4_N5J8vpOxU7xbzz4c5is8mdGJZM.jpeg",
    bio: [
      "With 8 years experience in ecommerce from the early days of the industry, to running a 7-figure high-ticket reselling store, Jack\u2019s path has led to the birth of GrowthEdge. Seeing an opportunity in the space for someone who has truly grown their own brand to enter the agency scene and do things differently.",
      "Outside of this with any spare time, Jack spends time attending Richmond games, travelling with his wife, and collecting 4k movies."
    ]
  }
];

const offerItems = [
  {
    icon: "Search",
    title: "Full Google & YouTube Ads Account Audit & Cleanup",
    description: "Comprehensive analysis of your current setup to identify quick wins and optimization opportunities"
  },
  {
    icon: "BarChart3",
    title: "Complete Google Keyword, Market & Competitor Research",
    description: "Deep dive into your category to see what competitors are doing \u2014 and build a strategy that positions your brand to win"
  },
  {
    icon: "Settings",
    title: "Complete Google & YouTube Ads Campaign Buildout",
    description: "A tailored campaign structure built specifically around your products, margins, and customer journey - not a cookie-cutter template"
  },
  {
    icon: "Users",
    title: "Expert-Led Campaign Management for 30 Days",
    description: "Hands-on execution from day one, with senior media buyers managing and optimizing your account end-to-end"
  },
  {
    icon: "Target",
    title: "80/20 Scaling Framework",
    description: "We identify your highest-performing campaigns, products, and keywords \u2014 then put 80% of spend behind them while 20% tests new opportunities"
  },
  {
    icon: "Layers",
    title: "Google & YouTube Creative Growth Framework",
    description: "We roll out your top creatives across Google\u2019s ecosystem \u2014 YouTube, Display, Shopping, and Search \u2014 managing it end-to-end"
  }
];

/* ------------------------------------------------------------------ */
/*  INLINE SVG ICONS                                                   */
/* ------------------------------------------------------------------ */

const MousePointerClickIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
    <path d="m16.071 16.071 4.243 4.243" />
    <path d="m7.188 2.239.777 2.897" />
    <path d="M5.136 7.965l-2.898-.777" />
    <path d="M14.869 5.136l2.898-.777" />
    <path d="m2.239 14.869.777-2.898" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#5A8AC7' }}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const BarChart3Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#5A8AC7' }}>
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#5A8AC7' }}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#5A8AC7' }}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#5A8AC7' }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#5A8AC7' }}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22.4 10.08-8.58 3.91a2 2 0 0 1-1.66 0l-8.58-3.9" />
    <path d="m22.4 14.08-8.58 3.91a2 2 0 0 1-1.66 0l-8.58-3.9" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 rotate-90" style={{ color: '#5A8AC7' }}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const iconMap: Record<string, React.FC> = {
  Search: SearchIcon,
  BarChart3: BarChart3Icon,
  Settings: SettingsIcon,
  Users: UsersIcon,
  Target: TargetIcon,
  Layers: LayersIcon,
};

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

/** Renders a text highlight with grizzle filter (used in section headings) */
const TextHighlight: React.FC<{ children: React.ReactNode; wide?: boolean }> = ({ children, wide }) => (
  <span className="relative inline-block">
    <span
      className="absolute inset-0 -z-10"
      style={{
        ...(wide ? highlightStyleWide : highlightStyle),
        filter: 'url(#grizzle)',
      }}
    />
    {children}
  </span>
);

/** Case study card title highlight (no grizzle filter) */
const CardHighlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline">
    <span
      className="absolute inset-0 -z-10"
      style={cardHighlightStyle}
    />
    {children}
  </span>
);

/** Highlight money values in case study titles using the regex approach from CaseStudyCard.jsx */
function highlightCaseTitle(titleRaw: string, caseNumber: number): React.ReactNode {
  const text = titleRaw.replace(/\n/g, ' ');

  const patterns: RegExp[] = [
    /^Straight/g,
    /\$158K\s+Revenue\s+in\s+4\s+Months/g,
    /\$208K\s*\u2192\s*\$427K/g,
    /\$163K\s+Spend\s*\u2192\s*\$587K\s+Revenue/g,
    /\$445K\s+\u2192/g,
    /\$2\.93M\s+Over\s+7\s+Months/g,
    /\$39K\s+to\s+\$1\.3M\s+Monthly/g,
    /\$1\.3M\s+Monthly\s+Revenue/g,
    /\$39K\s+to$/g,
    /\$1\.86M\s+\u2192\s+\$27\.2M/g,
    /\$101K\s+\u2192\s+\$386K/g,
    /\$145K\s+\u2192\s+\$1\.2M/g,
    /Generated\s+\$1\.34M\s+Revenue/g,
    /\$1\.24M\s+Total\s+Revenue\s+\(\+106%\)/g,
    /\$198K\s+\u2192\s+\$1\.74M/g,
    /\$367K\s+\u2192\s+\$800K/g,
    /\$5\.06M\s+Revenue/g,
    /\$524K\s+Spend\s+\u2192/g,
    /\$187K\s+\u2192\s+\$1\.67M\s+\(8\.9x\s+ROAS\)/g,
    /\$[\d,.]+[KMB]?\s+to\s+\$[\d,.]+[KMB]?\s+Monthly\s+Revenue/g,
    /\$[\d,.]+[KMB]?\s*\u2192\s*\$[\d,.]+[KMB]?\s+in\s+\d+\s+Months\s*\|/g,
    ...(caseNumber === 13 ? [] : [
      /\u2192\s*\$[\d,.]+[KMB]?\s+Revenue\s+in\s+\d+\s+Months\s+From\s+Scratch\s+\([\d,.]+x\s+ROAS\)/g,
      /\$[\d,.]+[KMB]?\s+Revenue\s+in\s+\d+\s+Months\s+From\s+Scratch\s+\([\d,.]+x\s+ROAS\)/g,
    ]),
    /\$[\d,.]+[KMB]?\s+Spend\s*\u2192\s*\$[\d,.]+[KMB]?\s+Revenue\s*\|\s*[\d,.]+x\s+ROAS/g,
    /\$[\d,.]+[KMB]?\s+Spend\s*\u2192\s*\$[\d,.]+[KMB]?\s+Revenue\s*\([\d,.]+x\s+ROAS\)/g,
    /\$[\d,.]+[KMB]?\s+\u2014?\s*Spend\s*\u2192\s*\$[\d,.]+[KMB]?\s+Revenue/g,
    /\$[\d,.]+[KMB]?\s+Revenue\s+\([\d,.]+x\s+ROAS\)/g,
    /\$[\d,.]+[KMB]?\s*\u2192\s*\$[\d,.]+[KMB]?\s*\|\s*[\d,.]+x\s+ROAS/g,
    /While\s+Growing\s+Total\s+Revenue\s+to\s+\$[\d,.]+[KMB]?\s+\(\+[\d,]+%\)\s+in\s+\d+\s+\w+/g,
    /\$[\d,.]+[KMB]?\s*\u2192\s*\$[\d,.]+[KMB]?\s+Monthly/g,
    /\$2\.73M\s+in\s+a\s+Single\s+Month/g,
    /\u2192\s*\$[\d,.]+[KMB]?\s+Revenue(?:\s+\||$)/g,
    /\u2192\s*\$[\d,.]+[KMB]?\s*\([\d,.]+x\s+ROAS\)/g,
    /\$[\d,.]+[KMB]?\s+in\s+a\s+Single\s+Month/g,
    /\$[\d,.]+[KMB]?\s+\(\+[\d,]+%\)/g,
    /\$[\d,.]+[KMB]?\s+\w+\s+\w+\s+\$[\d,.]+[KMB]?\s+Revenue\s+\([\d,.]+x\s+ROAS\)/g
  ];

  let bestMatch: RegExpExecArray | null = null;

  for (const pattern of patterns) {
    pattern.lastIndex = 0;
    const m = pattern.exec(text);
    if (m) {
      if (!bestMatch || m.index < bestMatch.index) {
        bestMatch = m;
      }
    }
  }

  if (!bestMatch) {
    // Fallback: highlight individual money values
    const parts = text.split(/(\$[\d,.]+[KMB]?)/g);
    return parts.map((part, idx) => {
      if (/^\$[\d,.]+[KMB]?$/.test(part)) {
        return <CardHighlight key={idx}>{part}</CardHighlight>;
      }
      return part;
    });
  }

  const matchStr = bestMatch[0];
  const result: React.ReactNode[] = [];

  if (bestMatch.index > 0) result.push(text.substring(0, bestMatch.index));

  let highlightText = matchStr;
  let afterText = '';
  if (matchStr.endsWith(' in')) {
    highlightText = matchStr.slice(0, -3);
    afterText = ' in';
  }

  result.push(<CardHighlight key={`hl-${bestMatch.index}`}>{highlightText}</CardHighlight>);
  if (afterText) result.push(afterText);

  const rest = text.substring(bestMatch.index + matchStr.length);
  if (rest) result.push(rest);

  return result;
}

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS                                                     */
/* ------------------------------------------------------------------ */

/** Reusable CTA button */
const CTAButton: React.FC<{
  onClick: () => void;
  className?: string;
  full?: boolean;
}> = ({ onClick, className = '', full }) => (
  <button
    onClick={onClick}
    className={`${full ? 'w-full' : ''} py-6 md:py-8 text-base md:text-lg font-semibold rounded-full transition-all group relative overflow-hidden border border-white/30 ${className}`}
    style={ctaButtonStyle}
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      Book A Strategy Call
      <span className="cta-icon-pulse inline-flex">
        <MousePointerClickIcon />
      </span>
    </span>
  </button>
);

/** Smaller CTA used between case studies */
const CTAButtonSmall: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full py-6 font-semibold rounded-full transition-all group border border-white/30"
    style={ctaButtonStyle}
  >
    <span className="flex items-center justify-center gap-3">
      Book A Strategy Call
      <span className="cta-icon-pulse inline-flex">
        <MousePointerClickIcon />
      </span>
    </span>
  </button>
);

/** Case Study Card */
const CaseStudyCard: React.FC<CaseStudy & { index: number }> = ({
  caseNumber,
  title,
  subtitle,
  description,
  proofImage,
  proofImage2,
  proofVideo,
  beforeImage,
  afterImage,
  testimonialImage,
  hideTestimonialLabel = false,
  index,
}) => (
  <div className="bg-transparent rounded-2xl overflow-hidden transition-all duration-300 group">
    <div className="flex flex-col lg:flex-row">
      {/* Content */}
      <div className={`flex-1 lg:w-3/5 ${caseNumber === 9 ? 'p-6 md:p-6' : 'p-6 md:p-6 lg:pr-4'}`}>
        <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 transition-colors leading-tight">
          {highlightCaseTitle(title, caseNumber)}
        </h3>

        <p className="font-medium text-sm mb-4" style={{ color: '#5A8AC7' }}>{subtitle}</p>

        {description && (
          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            {description.split('. ').filter((p: string) => p.trim()).map((point: string, idx: number) => (
              <li key={idx}>{point.trim().replace(/\.$/, '')}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Media */}
      {(proofImage || proofVideo || beforeImage || testimonialImage) && (
        <div className="flex-1 lg:w-2/5 p-4 lg:pl-4 lg:pr-6 lg:py-6 bg-transparent flex flex-col gap-4">
          {beforeImage && afterImage ? (
            <div className="flex-1 lg:flex-none">
              <p className="text-xs text-slate-600 uppercase tracking-wide mb-2 font-semibold">Results Proof</p>
              <div className="flex flex-col items-center gap-2">
                <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={beforeImage} alt="Before results" className="w-full h-auto object-contain" />
                </div>
                <div className="flex-shrink-0 py-2">
                  <ArrowRightIcon />
                </div>
                <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={afterImage} alt="After results" className="w-full h-auto object-contain" />
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
          ) : proofImage && caseNumber !== 1 ? (
            <div className="flex-1 lg:flex-none lg:w-full">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full">
                  <img src={proofImage} alt="Results proof" className="w-full h-auto object-contain" />
                </div>
                {proofImage2 && (
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={proofImage2} alt="Additional results proof" className="w-full h-auto object-contain" />
                  </div>
                )}
              </div>
            </div>
          ) : null}
          {testimonialImage && (
            <div className="flex-1 lg:flex-none">
              {!hideTestimonialLabel && (
                <p className="text-xs text-slate-600 uppercase tracking-wide mb-2 font-semibold">Client Testimonial</p>
              )}
              <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${caseNumber === 1 ? 'h-auto' : 'h-40 lg:h-44'}`}>
                {caseNumber === 1 ? (
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                      src="https://player.vimeo.com/video/1164842822?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      title="Client Testimonial"
                    />
                  </div>
                ) : (
                  <img src={testimonialImage} alt="Client testimonial" className="w-full h-full object-cover" />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function GrowthEdgeLanding() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to typeform section
  const handleBookCall = () => {
    const el = document.getElementById('typeform-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Load external scripts
  useEffect(() => {
    // Wistia
    const s1 = document.createElement('script');
    s1.src = 'https://fast.wistia.com/player.js';
    s1.async = true;
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.src = 'https://fast.wistia.com/embed/gnbxkqnma5.js';
    s2.async = true;
    s2.type = 'module';
    document.head.appendChild(s2);

    // Typeform
    const s3 = document.createElement('script');
    s3.src = '//embed.typeform.com/next/embed.js';
    s3.async = true;
    document.body.appendChild(s3);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Logo row helpers
  const midPoint = Math.ceil(logos.length / 2);
  const topRow = logos.slice(0, midPoint);
  const bottomRow = logos.slice(midPoint);

  return (
    <div className="min-h-screen bg-[#f5f7fb] relative">
      {/* ---- Global noise overlay ---- */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: FULL_NOISE_BG }}
      />

      {/* ---- Hidden SVG filter (grizzle) ---- */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="grizzle">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={3} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="relative z-10">

        {/* ================================================================ */}
        {/*  HERO SECTION                                                     */}
        {/* ================================================================ */}
        <section
          className="relative flex items-center justify-center px-4 pt-8 pb-6 md:pb-8 overflow-hidden"
          style={{
            minHeight: 'calc(100vh - 120px)',
            background: 'linear-gradient(to bottom, white 0%, rgba(90, 138, 199, 0.12) 100%)',
          }}
        >
          {/* Gradient orbs */}
          <div
            className="absolute -top-16 -left-16 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ backgroundColor: '#5A8AC7' }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ backgroundColor: '#5A8AC7', animationDelay: '1s' }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Eyebrow */}
            <p className="font-medium text-sm md:text-base tracking-wide mb-6 px-4" style={{ color: '#5A8AC7' }}>
              <span
                style={{
                  background: 'rgba(90, 138, 199, 0.25)',
                  padding: '2px 6px',
                  backgroundImage: NOISE_TEXTURE,
                  backgroundBlendMode: 'multiply',
                }}
              >
                For Brands Spending $10K+ Per Month on Google Ads
              </span>
            </p>

            {/* Main headline */}
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 px-2">
              We{' '}
              <TextHighlight>Scale</TextHighlight>{' '}
              Your{' '}
              <TextHighlight>Google Ads</TextHighlight>{' '}
              <TextHighlight>Exponentially</TextHighlight>{' '}
              While Your{' '}
              <TextHighlight>ROAS</TextHighlight>{' '}
              Stays{' '}
              <TextHighlight>Dialled</TextHighlight>.
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-sm md:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
              We have driven $150M+ for 200+ brands — from $30k months to $1.3M months.
            </p>

            {/* Wistia Video */}
            <div className="relative max-w-3xl mx-auto mb-6 md:mb-10 shadow-2xl px-2">
              <style>{`wistia-player[media-id='gnbxkqnma5']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gnbxkqnma5/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
              {/* @ts-ignore - Wistia custom element */}
              <wistia-player media-id="gnbxkqnma5" aspect="1.7777777777777777"></wistia-player>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto px-4">
              <CTAButton onClick={handleBookCall} full />
              <p className="text-slate-500 text-sm mt-3">*Quick 30 Second Application*</p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  LOGO SCROLL                                                      */}
        {/* ================================================================ */}
        <section
          className="py-2 md:py-4 px-4 overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(90, 138, 199, 0.12) 0%, rgba(90, 138, 199, 0.06) 60%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-slate-600 text-sm mb-8 font-medium">
              TRUSTED BY LEADING BRANDS
            </p>

            <div className="space-y-6">
              {/* Top row */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
                <div className="logo-scroll-left flex gap-12 items-center">
                  {[...topRow, ...topRow].map((logo, i) => (
                    <div key={i} className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain opacity-60 hover:opacity-90 transition-opacity"
                        style={{ filter: 'grayscale(100%)' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
                <div className="logo-scroll-right flex gap-12 items-center">
                  {[...bottomRow, ...bottomRow].map((logo, i) => (
                    <div key={i} className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain opacity-60 hover:opacity-90 transition-opacity"
                        style={{ filter: 'grayscale(100%)' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  CASE STUDIES                                                     */}
        {/* ================================================================ */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 whitespace-normal md:whitespace-nowrap relative inline-block px-4 md:px-0">
                The Brands We Are Scaling.{' '}
                <TextHighlight wide>The Numbers They Hit.</TextHighlight>
              </h2>
            </div>

            <div className="grid gap-6 mb-12">
              {caseStudies.map((study, index) => (
                <div key={study.caseNumber}>
                  {index % 2 === 1 && (
                    <div className="py-8">
                      <CTAButtonSmall onClick={handleBookCall} />
                    </div>
                  )}
                  <CaseStudyCard {...study} index={index} />
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleBookCall}
                className="w-full max-w-lg px-8 py-6 text-lg font-semibold rounded-full transition-all group border border-white/30"
                style={ctaButtonStyle}
              >
                <span className="flex items-center justify-center gap-3">
                  Book A Strategy Call
                  <span className="cta-icon-pulse inline-flex">
                    <MousePointerClickIcon />
                  </span>
                </span>
              </button>
              <p className="text-slate-500 text-sm mt-3">*Quick 30 Second Application*</p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  SLACK PROOF                                                      */}
        {/* ================================================================ */}
        <section className="py-20 px-4" style={{ backgroundColor: '#f5f7fb' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 px-4 md:px-0">
                <span
                  className="relative inline-block px-2 py-1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(90, 138, 199, 0.25) 0%, rgba(90, 138, 199, 0.25) 100%)',
                  }}
                >
                  Straight
                </span>{' '}
                From the{' '}
                <TextHighlight wide>Client Chat</TextHighlight>
                .
              </h2>
            </div>
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
              {slackScreenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="break-inside-avoid rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={screenshot}
                    alt="Client Slack message"
                    className="w-full h-auto cursor-pointer"
                    onClick={() => setSelectedImage(screenshot)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
              >
                <img
                  src={selectedImage}
                  alt="Enlarged Slack message"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                >
                  <XIcon />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ================================================================ */}
        {/*  TYPEFORM                                                         */}
        {/* ================================================================ */}
        <section className="py-20 px-4" id="typeform-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Book A Call -{' '}
                <TextHighlight>Let's See If We Are A Fit</TextHighlight>
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div data-tf-live="01JXJ5CSGX8M3S9ESNPMX26T69"></div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  ABOUT US                                                         */}
        {/* ================================================================ */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Meet{' '}
                <TextHighlight>The Owners</TextHighlight>
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Built by entrepreneurs who've scaled brands to millions — and now we help you do the same
              </p>
            </div>

            <div className="space-y-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start"
                  style={{
                    border: '1px solid rgba(90, 138, 199, 0.2)',
                  }}
                >
                  {/* Photo - horizontal layout, NOT circular, NOT centered */}
                  <div className="flex-shrink-0 w-64 md:w-40 h-80 md:h-48 rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  OFFER SECTION                                                    */}
        {/* ================================================================ */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span
                className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-6"
                style={{ backgroundColor: '#EFF4FF', color: '#5A8AC7' }}
              >
                Here's Our Offer To You
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-4 md:px-0">
                How We Double Your Revenue With Ads<br />
                <TextHighlight>Launched In 3 Days</TextHighlight>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto px-4">
                Everything is completely Done For You. Here is everything handled in our offer for you.
              </p>
            </div>

            <div className="space-y-4 mb-16">
              {offerItems.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div
                    key={item.title}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-slate-200/50 group"
                  >
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#EFF4FF', color: '#5A8AC7' }}
                      >
                        {IconComponent && <IconComponent />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Offer CTA */}
            <div className="text-center py-12">
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 px-4">
                Ready to get started?
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-base md:text-lg px-4">
                Apply below for a quick consultation with our team.
              </p>
              <button
                onClick={handleBookCall}
                className="px-10 py-7 text-lg font-semibold rounded-full transition-all group border border-white/30"
                style={ctaButtonStyle}
              >
                <span className="flex items-center justify-center gap-3">
                  Book A Strategy Call
                  <span className="cta-icon-pulse inline-flex">
                    <MousePointerClickIcon />
                  </span>
                </span>
              </button>
              <p className="text-slate-500 text-xs mt-4">*30 Second Application*</p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  FOOTER                                                           */}
        {/* ================================================================ */}
        <footer className="py-12 px-4 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-slate-900 font-semibold text-base">GrowthEdge</p>
            </div>
            <p className="text-slate-500 text-xs max-w-2xl mx-auto text-center">
              This site is not a part of the Facebook&trade; website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook&trade; in any way. Facebook&trade; is a trademark of Meta Platforms, Inc.
            </p>
            <p className="text-slate-500 text-xs text-center mt-6">
              &copy; {new Date().getFullYear()} GrowthEdge. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* ================================================================ */}
      {/*  INLINE STYLES                                                    */}
      {/* ================================================================ */}
      <style>{`
        /* ---- Logo scroll keyframes (32s duration) ---- */
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .logo-scroll-left {
          animation: scrollLeft 32s linear infinite;
        }
        .logo-scroll-right {
          animation: scrollRight 32s linear infinite;
        }

        /* ---- CTA icon pulse ---- */
        @keyframes ctaPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .cta-icon-pulse {
          animation: ctaPulse 0.6s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* ---- Noise-texture highlight class (absolute positioned span approach) ---- */
        .text-highlight-card {
          position: relative;
          display: inline;
        }
        .text-highlight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: #5A8AC7;
          opacity: 0.25;
          left: 0px;
          right: 0px;
          top: -3px;
          bottom: -3px;
          background-image: ${NOISE_TEXTURE};
          background-size: 100% 100%;
          background-repeat: repeat;
        }

        /* ---- Grizzle text highlight (with SVG filter) ---- */
        .text-highlight-grizzle {
          position: relative;
          display: inline-block;
        }
        .text-highlight-grizzle::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: #5A8AC7;
          opacity: 0.25;
          filter: url(#grizzle);
          left: -6px;
          right: -6px;
          top: -3px;
          bottom: -3px;
          background-image: ${NOISE_TEXTURE};
          background-size: 100% 100%;
          background-repeat: repeat;
        }
      `}</style>
    </div>
  );
}
