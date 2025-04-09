// components/HeroCalculator.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

export default function HeroCalculator() {
  const [cpu, setCpu] = useState(2);
  const price = cpu * 5; // Пример расчета

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F172A] py-20"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Настройте свой VPS
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
          <div className="mb-6">
            <label className="block text-gray-300 mb-4">CPU: {cpu} ядра</label>
            <Slider
              value={[cpu]}
              onValueChange={(v) => setCpu(v[0])}
              min={1}
              max={16}
              step={1}
            />
          </div>
          
          <div className="text-3xl font-bold">
            ${price} <span className="text-gray-400 text-lg">/месяц</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}