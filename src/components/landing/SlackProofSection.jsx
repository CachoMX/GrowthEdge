import React, { useState } from 'react';
import { motion } from "framer-motion";
import { X } from 'lucide-react';

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

export default function SlackProofSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f5f7fb' }}>
      <svg style={{ display: 'none' }}>
        <filter id="grizzle">
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
          <svg style={{ display: 'none' }}>
            <filter id="grizzle">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3,3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 px-4 md:px-0">
            <span 
              className="relative inline-block px-2 py-1"
              style={{
                background: 'linear-gradient(135deg, rgba(90, 138, 199, 0.25) 0%, rgba(90, 138, 199, 0.25) 100%)',
              }}
            >
              Straight
            </span> From the{' '}
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
              Client Chat
            </span>
            .
          </h2>
        </motion.div>
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
          {slackScreenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="break-inside-avoid rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={screenshot} 
                alt="Client Slack message" 
                className="w-full h-auto cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
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
              <X className="w-6 h-6 text-black" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}