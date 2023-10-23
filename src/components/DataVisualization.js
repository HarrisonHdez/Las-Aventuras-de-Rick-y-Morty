import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const DataVisualization = ({ characters }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Si ya existe un gráfico, destrúyelo
      chartRef.current.destroy();
    }

    // Filtrar los personajes por tipo para contar cuántos hay de cada tipo
    const characterCounts = characters.reduce((counts, character) => {
      const { type } = character;
      counts[type] = (counts[type] || 0) + 1;
      return counts;
    }, {});

    // Obtener los tipos y recuentos como arreglos para usar en el gráfico
    const types = Object.keys(characterCounts);
    const counts = types.map((type) => characterCounts[type]);

    // Crear el gráfico de barras
    const ctx = document.getElementById("characterChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: types,
        datasets: [
          {
            label: "Recuento de Personajes por Tipo",
            data: counts,
            backgroundColor: "rgba(75, 192, 192, 0.5)", // Cambio a verde
            borderColor: "rgba(75, 192, 192, 1)", // Cambio a verde

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
