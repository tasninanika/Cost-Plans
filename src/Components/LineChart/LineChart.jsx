import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const LineChart = () => {
  const servicePercentage = [
    { id: 1, name: "Facials", percentage: 80 },
    { id: 2, name: "Haircuts", percentage: 90 },
    { id: 3, name: "Makeup", percentage: 60 },
    { id: 4, name: "Manicure & Pedicure", percentage: 50 },
    { id: 5, name: "Waxing", percentage: 80 },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={servicePercentage}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="percentage"></YAxis>
        <Tooltip />
        <Line dataKey="percentage" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
