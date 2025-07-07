import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import foto1 from '/src/assets/images/foto1.png';

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

function FinCiclo() {
  const [typedText, setTypedText] = useState('');
  const fullText = '    Aún no hemos concluido. Analicemos el Fin de Ciclo.';

  useEffect(() => {
    setTypedText(''); // Reinicia el texto antes de empezar
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Velocidad de escritura
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div
      className="min-h-screen py-12"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3564599/pexels-photo-3564599.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Título principal */}
            <motion.h1
              className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Fin del Ciclo
            </motion.h1>
            {/* Mensaje introductorio con efecto de escritura */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slideIn"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              custom={1}
            >
              <p className="text-gray-700 text-lg text-center">
                <strong>{typedText}</strong>
              </p>
            </motion.div>
            {/* Imagen y Aprendizaje */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slideIn flex flex-col items-center"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              custom={2}
            >
              <motion.img
                src={foto1}
                alt="foto1"
                className="w-full max-w-3xl h-auto rounded-lg mb-8 shadow-xl object-cover"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />
              <div className="text-gray-700 text-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Aprendizaje</h2>
                <p>
                  Este Portafolio de Fin de Ciclo en Marketing Gastronómico recopila y organiza los principales proyectos, análisis y aprendizajes obtenidos a lo largo del curso. En él encontrarás desde el desarrollo de estrategias de posicionamiento y fidelización hasta la aplicación de técnicas de marketing emocional y experiencias de degustación. A través de reflexiones personales, evidencias prácticas y resultados medibles, demuestro cómo he integrado los conceptos y herramientas del marketing gastronómico para diseñar propuestas innovadoras y de valor en el sector alimentario.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinCiclo;