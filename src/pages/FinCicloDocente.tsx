import React from 'react';
import { motion } from 'framer-motion';
import foto9 from '/src/assets/images/foto9.png';
import foto3 from '/src/assets/images/foto3.png';
import foto6 from '/src/assets/images/foto6.png';
import foto7 from '/src/assets/images/foto7.png';
import foto12 from '/src/assets/images/foto12.png';
import foto15 from '/src/assets/images/foto15.png';
import foto16 from '/src/assets/images/foto16.jpeg';
import foto2 from '/src/assets/images/foto2.png';
import foto4 from '/src/assets/images/foto4.png';
import foto5 from '/src/assets/images/foto5.png';
import materiacuartaunidadPDF from '/public/Materiacuartaunidad.pdf';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8 }
  })
};

const FinCicloDocente: React.FC = () => (
  <div className="min-h-screen py-10 px-2" style={{ backgroundImage: 'url("https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-3xl mx-auto space-y-10 bg-white/80 rounded-2xl p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Aprendizaje en contacto con el docente
      </motion.h1>

      {/* 1.1 Presentación de los contenidos */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={1}
      >
        <h2 className="text-2xl font-bold mb-2">1.1. Presentación de los contenidos</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">La materia de Marketing Gastronómico explora cómo aplicar principios de marketing al sector de alimentos y bebidas, incluyendo análisis de mercado, segmentación de clientes, posicionamiento de marca y diseño de estrategias promocionales. Se estudian casos reales, herramientas digitales y tácticas de comunicación para conectar productos culinarios con sus consumidores de manera efectiva y sostenible</p>
        <p className="mb-2 font-semibold">Documento:</p>
        <div className="w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden mb-4">
          <iframe
            src={materiacuartaunidadPDF}
            className="w-full h-full"
            title="Materia cuarta unidad"
          />
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>A lo largo del curso he comprendido la importancia de identificar el perfil del cliente gastronómico, diseñar propuestas de valor diferenciadas y emplear canales de promoción adecuados (redes sociales, eventos, colaboraciones). También adquirí habilidades para medir resultados mediante indicadores como ticket promedio y NPS, y para ajustar estrategias en función del feedback del mercado.</p>
      </motion.section>

      {/* 1.2 Cuestionario – Segmentación */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={2}
      >
        <h2 className="text-2xl font-bold mb-2">1.2. Cuestionario – Segmentación</h2>
        <img src={foto9} alt="Cuestionario Segmentación" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar la prueba de selección múltiple sobre segmentación, reforcé mi comprensión de las variables clave (demográficas, psicográficas y conductuales) y aprendí a distinguir con precisión cada tipo de criterio, lo que me permite identificar correctamente los distintos segmentos de mercado y aplicar esa segmentación de forma más estratégica en mis planes de marketing gastronómico.</p>
      </motion.section>

      {/* 1.3 Artículo original de investigación */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={3}
      >
        <h2 className="text-2xl font-bold mb-2">1.3. Artículo original de investigación</h2>
        <img src={foto3} alt="Artículo original de investigación" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Taller de artículo original de investigación, donde discutimos metodología y hallazgos.</p>
        <p className="mb-2">No se realizó el aparatado taller, porque se eliminó esa tarea por la feria del verde.</p>
      </motion.section>

      {/* 1.4 Evaluación temas tratados en clases */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={4}
      >
        <h2 className="text-2xl font-bold mb-2">1.4. Evaluación temas tratados en clases</h2>
        <img src={foto6} alt="Evaluación temas tratados en clases" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al realizar la evaluación de los temas tratados en clase, identifiqué mis fortalezas y áreas de oportunidad en conceptos clave del marketing gastronómico—desde segmentación y posicionamiento hasta estrategias de fidelización—lo que me permitió consolidar conocimientos, reconocer brechas y ajustar mi enfoque de estudio para aplicar de manera más efectiva estas herramientas en proyectos reales del sector.</p>
      </motion.section>

      {/* 1.5 Cuestionario fin de ciclo-Teoría */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={5}
      >
        <h2 className="text-2xl font-bold mb-2">1.5. Cuestionario fin de ciclo-Teoría</h2>
        <img src={foto7} alt="Cuestionario fin de ciclo-Teoría" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar el cuestionario teórico de fin de ciclo, consolidé mi entendimiento de los fundamentos del marketing gastronómico—incluyendo modelos de comportamiento del consumidor, teorías de posicionamiento y marcos conceptuales de fidelización—y confirmé mi capacidad para relacionar la teoría con casos prácticos, lo que fortalece mi base académica y me prepara para aplicar estos conceptos de forma sólida en futuros proyectos profesionales.</p>
      </motion.section>

      {/* 1.6 Cuestionario práctico */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={6}
      >
        <h2 className="text-2xl font-bold mb-2">1.6. Cuestionario práctico</h2>
        <img src={foto12} alt="Cuestionario práctico" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al resolver el cuestionario práctico basado en ejemplos reales, desarrollé la habilidad de aplicar directamente conceptos teóricos de marketing gastronómico a situaciones concretas, identificando estrategias efectivas de promoción, fijación de precios y fidelización, lo que me permitió comprender cómo adaptar tácticas según el contexto y evaluar su impacto en el comportamiento del cliente.</p>
      </motion.section>

      {/* 1.7 Imagen y Marketing Personal */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={7}
      >
        <h2 className="text-2xl font-bold mb-2">1.7. Imagen y Marketing Personal</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">La actividad exige presentar y defender un proyecto gastronómico en formato PechaKucha (20 diapositivas × 20 s) ante el profesor y profesionales, cuidando imagen, claridad y recursos visuales.</p>
        <div className="flex flex-col gap-8 w-full justify-center mb-8">
          <img src={foto15} alt="PechaKucha 1" className="w-full max-w-lg rounded-lg shadow-lg object-contain h-auto" />
          <img src={foto16} alt="PechaKucha 2" className="w-full max-w-lg rounded-lg shadow-lg object-contain h-auto" />
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Mediante esta exposición he fortalecido mi capacidad para transmitir ideas complejas de manera concisa y visualmente atractiva, así como para proyectar una imagen profesional coherente con el sector gastronómico. Además, he desarrollado habilidades de gestión del tiempo, control del lenguaje corporal y respuesta ágil a preguntas, aspectos clave para defender con éxito cualquier propuesta ante audiencias exigentes.</p>
      </motion.section>

      {/* 1.8 Quiz interactivo sobre técnicas de venta y tipos de clientes */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={8}
      >
        <h2 className="text-2xl font-bold mb-2">1.8. Quiz interactivo sobre técnicas de venta y tipos de clientes</h2>
        <img src={foto2} alt="Quiz interactivo" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar el quiz interactivo sobre técnicas de venta y tipos de clientes, afianzé mi capacidad para reconocer y aplicar métodos de persuasión adecuados (como up selling y cross selling) según el perfil del comprador, identificando comportamientos y necesidades de diferentes segmentos, lo que me permite personalizar mis enfoques comerciales y mejorar la eficacia de mis estrategias de venta en el ámbito gastronómico.</p>
      </motion.section>

      {/* 1.9 Actividades de evaluación */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={9}
      >
        <h2 className="text-2xl font-bold mb-2">1.9. Actividades de evaluación</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">Aquí completé diversas pruebas para certificar mis conocimientos:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Lecciones orales (incluyendo dinámicas tipo "ahorcado").</li>
        </ul>
        <div className="flex flex-col gap-8 w-full justify-center mb-8">
          <img src={foto4} alt="Lección oral 1" className="w-full max-w-lg rounded-lg shadow-lg object-contain h-auto" />
          <img src={foto5} alt="Lección oral 2" className="w-full max-w-lg rounded-lg shadow-lg object-contain h-auto" />
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al participar en las actividades de evaluación; especialmente en las lecciones orales y las dinámicas tipo "ahorcado", desarrollé mi fluidez y confianza al comunicar conceptos de marketing gastronómico en voz alta, reforcé la memoria de terminología clave mediante el juego y aprendí a gestionar la presión de responder en tiempo real. Estas pruebas interactivas mejoraron mi capacidad de reflexión rápida, enriquecieron mi vocabulario profesional y consolidaron el aprendizaje de manera lúdica y participativa.</p>
      </motion.section>
    </div>
  </div>
);

export default FinCicloDocente; 