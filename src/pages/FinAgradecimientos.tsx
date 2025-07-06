import React from 'react';
import { motion } from 'framer-motion';

const FinAgradecimientos: React.FC = () => (
  <div className="min-h-screen py-10 px-2" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-3xl mx-auto space-y-10 bg-white/80 rounded-2xl p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Agradecimientos
      </motion.h1>

      {/* 5. Agradecimientos */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>Quiero expresar mi más sincero agradecimiento al Ing. Geovanny Lenin Haro Sosa por su dedicación y compromiso a lo largo de este ciclo de Marketing Gastronómico. Gracias a su claridad expositiva y sus ejemplos prácticos he podido comprender a fondo las estrategias de mercado aplicables al sector gastronómico. Aprecio especialmente su disposición para resolver dudas, su retroalimentación constante y el entusiasmo con que nos motivó a innovar en nuestros proyectos. Su enseñanza ha sido fundamental para fortalecer mis competencias profesionales y me impulsa a seguir creciendo en este apasionante campo.</p>
      </motion.section>
    </div>
  </div>
);

export default FinAgradecimientos; 