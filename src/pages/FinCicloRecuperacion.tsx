import React from 'react';
import foto13 from '/src/assets/images/foto13.png';

const FinCicloRecuperacion: React.FC = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Recuperación académica</h1>

      {/* 4.1 Evaluación de recuperación */}
      <section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">4.1. Evaluación de recuperación</h2>
        <img src={foto13} alt="Evaluación de recuperación" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al realizar la evaluación de recuperación, consolidé mis conocimientos al revisar y reforzar los temas en los que tenía debilidades, aprendí a identificar lagunas específicas en mi comprensión y a priorizar estrategias de estudio más efectivas para asegurar una asimilación completa de los conceptos de marketing gastronómico.</p>
      </section>

      {/* 5. Agradecimientos */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">5. Agradecimientos</h2>
        <p>Quiero expresar mi más sincero agradecimiento al Ing. Geovanny Lenin Haro Sosa por su dedicación y compromiso a lo largo de este ciclo de Marketing Gastronómico. Gracias a su claridad expositiva y sus ejemplos prácticos he podido comprender a fondo las estrategias de mercado aplicables al sector gastronómico. Aprecio especialmente su disposición para resolver dudas, su retroalimentación constante y el entusiasmo con que nos motivó a innovar en nuestros proyectos. Su enseñanza ha sido fundamental para fortalecer mis competencias profesionales y me impulsa a seguir creciendo en este apasionante campo.</p>
      </section>
    </div>
  </div>
);

export default FinCicloRecuperacion; 