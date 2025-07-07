import React from 'react';
import { motion } from 'framer-motion';
import foto13 from '/src/assets/images/foto13.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8 }
  })
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const FinCicloRecuperacion: React.FC = () => (
  <div className="min-h-screen py-10 px-2" style={{ backgroundImage: 'url(\"https://images.pexels.com/photos/2865987/pexels-photo-2865987.jpeg\")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-3xl mx-auto space-y-10 bg-white/80 rounded-2xl p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Recuperación académica
      </motion.h1>
      <motion.section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" initial="hidden" animate="visible" variants={sectionVariants} custom={1}>
        <h2 className="text-2xl font-bold mb-2 text-center">4.1. Evaluación de recuperación</h2>
        <motion.img src={foto13} alt="Evaluación de recuperación" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" variants={imageVariants} initial="hidden" animate="visible" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al realizar la evaluación de recuperación, consolidé mis conocimientos al revisar y reforzar los temas en los que tenía debilidades, aprendí a identificar lagunas específicas en mi comprensión y a priorizar estrategias de estudio más efectivas para asegurar una asimilación completa de los conceptos de marketing gastronómico.</p>
      </motion.section>
    </div>
  </div>
);

export default FinCicloRecuperacion; 