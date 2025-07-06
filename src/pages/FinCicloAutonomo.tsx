import React from 'react';
import foto11 from '/src/assets/images/foto11.png';
import InformeVentasPDF from '/public/InformedeVentasporStandFeriadeemprendedoresDIABLO.pdf';
import GlosarioColaborativoPDF from '/public/GLOSARIOCOLABORATIVOTÉRMINOSCLAVENVENTASYFIDELIZACIÓN.pdf';
import ObjetivoSmartPDF from '/public/Objetivo_smart.pdf';

const FinCicloAutonomo: React.FC = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2">
    <div className="max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Aprendizaje Autónomo</h1>

      {/* 3.1 Portafolio Fin de Ciclo */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">3.1. Portafolio Fin de Ciclo</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">Para cerrar el curso, elaboré este portafolio digital donde documento todo el proceso: actividades, evidencias y reflexiones.</p>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al compilar cada sección comprendí el valor de la documentación sistemática: pude evaluar mi evolución, evidenciar competencias adquiridas y demostrar de forma integral mi desempeño en Marketing Gastronómico.</p>
      </section>

      {/* 3.2 Cuestionario-Teoría */}
      <section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">3.2. Cuestionario-Teoría</h2>
        <img src={foto11} alt="Cuestionario Teoría" className="w-full max-w-2xl rounded-lg mb-8 shadow-lg object-contain h-auto" />
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar el cuestionario teórico, reforcé mi comprensión de los principios fundamentales del marketing como la segmentación, posicionamiento y comportamiento del consumidor.</p>
      </section>

      {/* 2.9 Informe de ventas por stand */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">2.9. Informe de ventas por stand</h2>
        <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4">
          <iframe
            src={InformeVentasPDF}
            className="w-full h-full"
            title="Informe de ventas por stand - Feria de emprendedores DIABLO"
          />
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al elaborar el informe de ventas por stand, desarrollé mi capacidad para recopilar y organizar datos de ventas de forma clara, interpretar indicadores clave como volumen de ventas y ticket promedio, y comparar el desempeño entre distintos productos y promociones.</p>
      </section>

      {/* 2.10 Glosario colaborativo de términos clave en ventas y fidelización */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">2.10. Glosario colaborativo de términos clave en ventas y fidelización</h2>
        <p className="mb-2 font-semibold">Introducción:</p>
        <p className="mb-4">El "Glosario colaborativo de términos clave en ventas y fidelización" es una actividad en la que los estudiantes definen y ejemplifican conceptos esenciales como ticket promedio, up selling, cross selling, NPS y programa de fidelización. Mediante la construcción conjunta de entradas claras y aplicadas a un entorno real de restaurante, se busca unificar el vocabulario del equipo y profundizar en el significado práctico de cada término.</p>
        <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4">
          <iframe
            src={GlosarioColaborativoPDF}
            className="w-full h-full"
            title="Glosario colaborativo de términos clave en ventas y fidelización"
          />
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al elaborar este glosario he reforzado mi comprensión de los mecanismos de venta y retención de clientes, identificando cómo cada concepto impacta en la experiencia del consumidor y en los resultados del negocio.</p>
      </section>

      {/* 2.11 Formulación de los objetivos Smart */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">2.11. Formulación de los objetivos Smart</h2>
        <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-4">
          <iframe
            src={ObjetivoSmartPDF}
            className="w-full h-full"
            title="Objetivo Smart"
          />
        </div>
        <p className="mb-2 font-semibold">Aprendizaje:</p>
        <p>Al completar estas tareas de evaluación integral —mi Portafolio de Fin de Ciclo, la Presentación y Defensa de Estrategias Gastronómicas, y la formulación de Objetivos SMART— he demostrado que ya incorporé y apliqué los conocimientos adquiridos durante el ciclo. Estos entregables reflejan mi crecimiento profesional en gastronomía y me brindan una base sólida para enfrentar nuevos retos en mi carrera.</p>
      </section>
    </div>
  </div>
);

export default FinCicloAutonomo; 