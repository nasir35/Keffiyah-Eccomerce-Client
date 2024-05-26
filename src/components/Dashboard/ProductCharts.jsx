import React, { useEffect, useRef } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Custom plugin for displaying text in the center of the Doughnut chart
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: function (chart) {
    const { width, height, ctx } = chart;
    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";

    const text = "75%"; // Example text to be displayed in the center
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

const ProductCharts = () => {
  const doughnutRef = useRef(null);
  const barRef = useRef(null);

  const doughnutData = {
    labels: ["Electronics", "Clothing", "Groceries", "Books", "Toys"],
    datasets: [
      {
        data: [120, 90, 70, 50, 30],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const barData = {
    labels: ["Electronics", "Clothing", "Groceries", "Books", "Toys"],
    datasets: [
      {
        label: "Products",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [120, 90, 70, 50, 30],
      },
    ],
  };

  useEffect(() => {
    if (doughnutRef.current) {
      const chart = doughnutRef.current.chartInstance;
      if (chart) chart.destroy();
    }
  }, [doughnutData]);

  useEffect(() => {
    if (barRef.current) {
      const chart = barRef.current.chartInstance;
      if (chart) chart.destroy();
    }
  }, [barData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="card bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-2">
          Products by Categories (Doughnut Chart)
        </h2>
        <Doughnut
          data={doughnutData}
          ref={doughnutRef}
          plugins={[centerTextPlugin]} // Add the custom plugin here
        />
      </div>
      <div className="card bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-2">
          Products by Categories (Bar Chart)
        </h2>
        <Bar data={barData} ref={barRef} />
      </div>
    </div>
  );
};

export default ProductCharts;
