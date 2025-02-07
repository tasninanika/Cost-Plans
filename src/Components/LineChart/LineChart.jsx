import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {
  const servicePercentage = [
    { id: 1, name: "Facials", num: 80 },
    { id: 2, name: "Haircuts", num: 90 },
    { id: 3, name: "Makeup", num: 60 },
    { id: 4, name: "Manicure & Pedicure", num: 50 },
    { id: 5, name: "Waxing", num: 80 },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={servicePercentage}></LChart>
      <Line></Line>
    </div>
  );
};

export default LineChart;
