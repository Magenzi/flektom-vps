import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import HeroCalculator from '@/components/HeroCalculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Calculator Section */}
      <HeroCalculator />

      {/* Main Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          FlekTom VPS
        </h1>
        <p className="mt-4 text-gray-300 text-xl">
          Высокопроизводительные серверы с мгновенным развертыванием
        </p>
      </motion.section>
    </div>
  );
}