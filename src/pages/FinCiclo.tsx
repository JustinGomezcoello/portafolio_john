import React, { useState, useEffect } from 'react';
import foto1 from '/src/assets/images/foto1.png';

function FinCiclo() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aún no hemos concluido. Analicemos el Fin de Ciclo.';

  useEffect(() => {
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
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Título principal */}
            <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
              Fin del Ciclo
            </h1>

            {/* Mensaje introductorio con efecto de escritura */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slideIn">
              <p className="text-gray-700 text-lg text-center">
                <strong>{typedText}</strong>
              </p>
            </div>

            {/* Imagen y Aprendizaje */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slideIn flex flex-col items-center">
              <img 
                src={foto1}
                alt="foto1"
                className="w-full max-w-3xl h-auto rounded-lg mb-8 shadow-xl object-cover"
              />
              <div className="text-gray-700 text-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Aprendizaje</h2>
                <p>
                  Este Portafolio de Fin de Ciclo en Marketing Gastronómico recopila y organiza los principales proyectos, análisis y aprendizajes obtenidos a lo largo del curso. En él encontrarás desde el desarrollo de estrategias de posicionamiento y fidelización hasta la aplicación de técnicas de marketing emocional y experiencias de degustación. A través de reflexiones personales, evidencias prácticas y resultados medibles, demuestro cómo he integrado los conceptos y herramientas del marketing gastronómico para diseñar propuestas innovadoras y de valor en el sector alimentario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinCiclo;