import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

/**
 * Componente de visualización de datos que muestra un gráfico de barras.
 *
 * @component
 *
 * @param {Object[]} characters - La lista de personajes para generar el gráfico.
 */
const DataVisualization = ({ characters }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      /**
       * Destruye el gráfico anterior si existe.
       */
      chartRef.current.destroy();
    }

    /**
     * Calcula el recuento de personajes por tipo.
     */
    const characterCounts = characters.reduce((counts, character) => {
      const { type } = character;
      counts[type] = (counts[type] || 0) + 1;
      return counts;
    }, {});

    /**
     * Obtiene los tipos y los recuentos.
     */
    const types = Object.keys(characterCounts);
    const counts = types.map((type) => characterCounts[type]);

    /**
     * Obtiene el contexto del gráfico en el elemento con id "characterChart".
     */
    const ctx = document.getElementById("characterChart").getContext("2d");

    /**
     * Crea un nuevo gráfico de barras.
     */
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: types,
        datasets: [
          {
            label: "Recuento de Personajes por Tipo",
            data: counts,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
  }, [characters]);

  return (
    <div>
      <canvas id="characterChart"></canvas>
    </div>
  );
};

export default DataVisualization;
