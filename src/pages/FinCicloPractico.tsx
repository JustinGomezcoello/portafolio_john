import React from 'react';
import { motion } from 'framer-motion';
import foto14 from '/src/assets/images/foto14.png';
import foto10 from '/src/assets/images/foto10.png';
import foto8 from '/src/assets/images/foto8.png';
import AprendizajeFeriaDiabloPDF from '/public/AprendizajepracticoexperimentalDiablo.pdf';
import AprendizajeFeriaEvidenciasPDF from '/public/AprendizajepracticoexperimentalEvidenciasvisuales.pdf';
import VentaProductosPDF from '/public/AprendizajepracticoexperimentalVentaproductos.pdf';
import VentaProductosDiabloPDF from '/public/AprendizajepracticoexperimentalVentaproductosDIABLO.pdf';
import AnalisisSatisfaccionPDF from '/public/Análisisdeniveldesatisfacciónalcliente_EnBocaDeTodos_Bonappetit.pdf';
import Grupo6FeriaPDF from '/public/Grupo6Feriaemprendimientos.pdf';

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

const FinCicloPractico: React.FC = () => (
  <div className="min-h-screen py-10 px-2" style={{ backgroundImage: 'url("https://images.pexels.com/photos/4374578/pexels-photo-4374578.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-3xl mx-auto space-y-10 bg-white/80 rounded-2xl p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Aprendizaje Práctico experimental
      </motion.h1>

      {/* 2.1 Caso Práctico 2 */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" initial="hidden" animate="visible" variants={sectionVariants} custom={1}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.1. Caso Práctico 2</h2>
        <p className="mb-2">Casos prácticos en línea, como resolución de problemas reales de marketing.</p>
        <motion.img src={foto14} alt="Caso Práctico 2" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" variants={imageVariants} initial="hidden" animate="visible" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Estas evaluaciones me ayudaron a identificar mis fortalezas y áreas de mejora, a gestionar el tiempo en pruebas y a consolidar los conceptos teóricos mediante su aplicación en ejercicios concretos.</p>
      </motion.section>

      {/* 2.2 Evaluación Feria de Emprendedores */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={2}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.2. Evaluación Feria de Emprendedores</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p>Como parte de la valoración práctica, diseñé y ejecuté:</p>
        <ul className="list-disc pl-6 mb-2 text-gray-700">
          <li>Aprendizaje práctico experimental en la feria.</li>
        </ul>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={AprendizajeFeriaDiabloPDF}
            className="w-full h-full"
            title="Aprendizaje práctico experimental - Feria de emprendedores (Diablo)"
          />
        </motion.div>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={AprendizajeFeriaEvidenciasPDF}
            className="w-full h-full"
            title="Aprendizaje práctico experimental - Feria de emprendedores (Evidencias visuales)"
          />
        </motion.div>
        <ul className="list-disc pl-6 mb-2 text-gray-700">
          <li>Evaluación de estrategias de marketing, merchandising, imagen corporativa y trabajo en equipo.</li>
        </ul>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>La experiencia en la feria reforzó mi capacidad de planificación, me enseñó a interpretar datos de ventas en tiempo real y a ajustar tácticas de promoción y presentación para maximizar ingresos y satisfacción del cliente.</p>
      </motion.section>

      {/* 2.3 Cuestionario-Estrategias de marketing */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" initial="hidden" animate="visible" variants={sectionVariants} custom={3}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.3. Cuestionario-Estrategias de marketing</h2>
        <motion.img src={foto10} alt="Cuestionario Estrategias de marketing" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" variants={imageVariants} initial="hidden" animate="visible" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar el cuestionario de Estrategias de Marketing, reforcé mi capacidad para identificar y diferenciar tácticas clave, como mezcla de marketing (producto, precio, plaza y promoción), marketing digital y estrategias de fidelización; y aprendí a seleccionar el enfoque más adecuado según los objetivos de un negocio gastronómico, optimizando el valor percibido y la conexión con el cliente.</p>
      </motion.section>

      {/* 2.4 Cuestionario conceptos prácticos marketing */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" initial="hidden" animate="visible" variants={sectionVariants} custom={4}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.4. Cuestionario conceptos prácticos marketing</h2>
        <motion.img src={foto8} alt="Cuestionario conceptos prácticos marketing" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" variants={imageVariants} initial="hidden" animate="visible" />
      </motion.section>

      {/* 2.5 Aprendizaje práctico experimenta-venta de productos */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={5}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.5. Aprendizaje práctico experimenta-venta de productos</h2>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={VentaProductosPDF}
            className="w-full h-full"
            title="Venta de productos"
          />
        </motion.div>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={VentaProductosDiabloPDF}
            className="w-full h-full"
            title="Venta de productos DIABLO"
          />
        </motion.div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Gracias a esta práctica he desarrollado habilidades para recopilar y analizar métricas de venta—como volumen, ticket promedio y tasa de conversión—identificando qué elementos de la propuesta generan mayor interés. Además, he mejorado mi capacidad de adaptación rápida, ajustando tácticas de promoción y negociación en tiempo real para optimizar los resultados comerciales.</p>
      </motion.section>

      {/* 2.6 Estrategia de marketing emocional (degustación) */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={6}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.6. Estrategia de marketing emocional (degustación)</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p>La estrategia de marketing emocional mediante degustaciones aprovecha las sensaciones y emociones que despiertan los sabores para crear vínculos afectivos con la marca. Al ofrecer muestras gratuitas o dirigidas, se busca estimular los sentidos del consumidor, generar experiencias memorables y reforzar la percepción de valor y calidad del producto en un entorno controlado.</p>
        <motion.div className="w-full aspect-video max-w-2xl mx-auto mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src="https://www.youtube.com/embed/IRdr9livyag"
            title="Estrategia de marketing emocional"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          />
        </motion.div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al implementar esta táctica he comprendido cómo las respuestas sensoriales influyen en las decisiones de compra y en la fidelización del cliente. He aprendido a diseñar una experiencia de degustación que active emociones positivas—como sorpresa, placer y confianza—y a medir su impacto en indicadores como la intención de compra y la recomendación boca a boca.</p>
      </motion.section>

      {/* 2.7 Actividad final: Análisis del nivel de satisfacción del cliente en un establecimiento gastronómico local */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={7}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.7. Actividad final: Análisis del nivel de satisfacción del cliente en un establecimiento gastronómico local</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p>Realiza un análisis de la satisfacción del cliente en un establecimiento gastronómico de tu ciudad, empleando observación directa, encuestas breves y revisión de reseñas digitales. Estructura tu informe con un marco teórico, describe la metodología aplicada, presenta resultados clave y propone recomendaciones basadas en tus hallazgos.</p>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={AnalisisSatisfaccionPDF}
            className="w-full h-full"
            title="Análisis del nivel de satisfacción del cliente (PDF)"
          />
        </motion.div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al ejecutar esta actividad, fortalecí mi capacidad de recolectar y analizar datos cualitativos y cuantitativos sobre la experiencia del cliente. Aprendí a identificar puntos fuertes y oportunidades de mejora en un negocio real, y adquirí habilidades para formular recomendaciones prácticas que optimicen la percepción y fidelización de los comensales.</p>
      </motion.section>

      {/* 2.8 Aplicación del marketing gastronómico en la feria */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={8}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.8. Aplicación del marketing gastronómico en la feria</h2>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={Grupo6FeriaPDF}
            className="w-full h-full"
            title="Grupo 6 Feria emprendimientos"
          />
        </motion.div>
        <p className="mb-2 font-semibold">Aprendizaje de Actividades de refuerzo y complementación:</p>
        <p>Gracias a estos ejercicios reforcé mi comprensión de las herramientas básicas de marketing gastronómico, mejoré mi vocabulario técnico y aprendí a relacionar teoría y práctica antes de pasar a proyectos reales.</p>
      </motion.section>
    </div>
  </div>
);

export default FinCicloPractico; 