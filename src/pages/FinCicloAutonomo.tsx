import React from 'react';
import { motion } from 'framer-motion';
import foto11 from '/src/assets/images/foto11.png';
import fotoextra1 from '/src/assets/images/fotoextra1.jpg';
import fotoextra2 from '/src/assets/images/fotoextra2.jpg';
import InformeVentasPDF from '/public/InformedeVentasporStandFeriadeemprendedoresDIABLO.pdf';
import InformeVentasDIABLOPDF from '/public/InformedeventasDIABLO.pdf';
import GlosarioColaborativoPDF from '/public/GLOSARIOCOLABORATIVOTÉRMINOSCLAVENVENTASYFIDELIZACIÓN.pdf';
import ObjetivoSmartPDF from '/public/Objetivo_smart.pdf';

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

const FinCicloAutonomo: React.FC = () => (
  <div className="min-h-screen py-10 px-2" style={{ backgroundImage: 'url(\"https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg\")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-3xl mx-auto space-y-10 bg-white/80 rounded-2xl p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Aprendizaje Autónomo
      </motion.h1>

      {/* 3.1 Portafolio Fin de Ciclo */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={1}>
        <h2 className="text-2xl font-bold mb-2 text-center">3.1. Portafolio Fin de Ciclo</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">Para cerrar el curso, elaboré este portafolio digital donde documento todo el proceso: actividades, evidencias y reflexiones.</p>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al compilar cada sección comprendí el valor de la documentación sistemática: pude evaluar mi evolución, evidenciar competencias adquiridas y demostrar de forma integral mi desempeño en Marketing Gastronómico.</p>
      </motion.section>

      {/* 3.2 Cuestionario-Teoría */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" initial="hidden" animate="visible" variants={sectionVariants} custom={2}>
        <h2 className="text-2xl font-bold mb-2 text-center">3.2. Cuestionario-Teoría</h2>
        <motion.img src={foto11} alt="Cuestionario Teoría" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" variants={imageVariants} initial="hidden" animate="visible" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar el cuestionario teórico, reforcé mi comprensión de los principios fundamentales del marketing como la segmentación, posicionamiento y comportamiento del consumidor.</p>
      </motion.section>

      {/* 2.9 Informe de ventas por stand */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={3}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.9. Informe de ventas por stand</h2>
        <p className="mb-4">Se presentan dos informes de ventas por stand:</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Informe de Ventas por Stand - Feria de Emprendedores DIABLO</h3>
            <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
              <iframe
                src={InformeVentasPDF}
                className="w-full h-full"
                title="Informe de ventas por stand - Feria de emprendedores DIABLO"
              />
            </motion.div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Informe de Ventas DIABLO</h3>
            <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
              <iframe
                src={InformeVentasDIABLOPDF}
                className="w-full h-full"
                title="Informe de ventas DIABLO"
              />
            </motion.div>
          </div>
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al elaborar el informe de ventas por stand, desarrollé mi capacidad para recopilar y organizar datos de ventas de forma clara, interpretar indicadores clave como volumen de ventas y ticket promedio, y comparar el desempeño entre distintos productos y promociones.</p>
      </motion.section>

      {/* 2.10 Glosario colaborativo de términos clave en ventas y fidelización */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={4}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.10. Glosario colaborativo de términos clave en ventas y fidelización</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">El "Glosario colaborativo de términos clave en ventas y fidelización" es una actividad en la que los estudiantes definen y ejemplifican conceptos esenciales como ticket promedio, up selling, cross selling, NPS y programa de fidelización. Mediante la construcción conjunta de entradas claras y aplicadas a un entorno real de restaurante, se busca unificar el vocabulario del equipo y profundizar en el significado práctico de cada término.</p>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={GlosarioColaborativoPDF}
            className="w-full h-full"
            title="Glosario colaborativo de términos clave en ventas y fidelización"
          />
        </motion.div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al elaborar este glosario he reforzado mi comprensión de los mecanismos de venta y retención de clientes, identificando cómo cada concepto impacta en la experiencia del consumidor y en los resultados del negocio.</p>
      </motion.section>

      {/* 2.11 Formulación de los objetivos Smart */}
      <motion.section className="bg-white rounded-lg shadow-lg p-6" initial="hidden" animate="visible" variants={sectionVariants} custom={5}>
        <h2 className="text-2xl font-bold mb-2 text-center">2.11. Formulación de los objetivos Smart</h2>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={ObjetivoSmartPDF}
            className="w-full h-full"
            title="Objetivo Smart"
          />
        </motion.div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar estas tareas de evaluación integral —mi Portafolio de Fin de Ciclo, la Presentación y Defensa de Estrategias Gastronómicas, y la formulación de Objetivos SMART— he demostrado que ya incorporé y apliqué los conocimientos adquiridos durante el ciclo. Estos entregables reflejan mi crecimiento profesional en gastronomía y me brindan una base sólida para enfrentar nuevos retos en mi carrera.</p>
      </motion.section>

      {/* Feria del Verde */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={6}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">"Sabores que conectan con nuestras raíces" 🌿🍽</h2>
        <motion.img
          src={fotoextra1}
          alt="Feria del Verde"
          className="w-full max-w-2xl rounded-lg mb-6 shadow-lg object-cover"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <p className="text-gray-700 text-lg text-center">
          Así vivimos la Feria del Verde, un encuentro donde la tradición, el emprendimiento y la creatividad se fusionan en cada plato.
          Más que una feria, es una experiencia que celebra el sabor auténtico del plátano verde, impulsa a nuestros productores locales y fortalece la identidad gastronómica de nuestra tierra.
        </p>
      </motion.section>

      {/* Vida Saludable */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={7}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">"Nutrir cuerpo y mente: el sabor de una vida saludable" 🌿🍽</h2>
        <motion.img
          src={fotoextra2}
          alt="Vida Saludable"
          className="w-full max-w-2xl rounded-lg mb-6 shadow-lg object-cover"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <p className="text-gray-700 text-lg text-center">
          En nuestro stand representamos la tendencia global hacia una vida más saludable, combinando creatividad, conocimiento y sabor.
          Exploramos cómo la gastronomía puede ser aliada clave para el bienestar, demostrando que comer rico también puede ser sinónimo de cuidar el cuerpo.
          Gracias a todos los que visitaron nuestro espacio, probaron nuestras propuestas y se sumaron a este movimiento que crece con fuerza en el mundo.
        </p>
      </motion.section>

      {/* Co-branding Mix Section */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={8}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">🌮🥤🍰 "Tres marcas, una experiencia gastronómica que enamora" 💫🇪🇨</h2>
        <motion.div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4" variants={imageVariants} initial="hidden" animate="visible">
          <iframe
            src={'/cobrandingmix.pdf'}
            className="w-full h-full"
            title="Co-branding Mix"
          />
        </motion.div>
        <p className="text-gray-700 text-lg text-center mb-2">
          La actividad nos permitió aplicar conceptos de segmentación, propuesta de valor, co-branding y promoción, reforzando la idea de que en marketing todo comunica, desde el nombre hasta el precio.
        </p>
      </motion.section>
    </div>
  </div>
);

export default FinCicloAutonomo; 