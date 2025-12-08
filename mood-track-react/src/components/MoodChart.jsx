import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

{
  /*   const data = [
  { date: "2025-01-01", score: 3 },
  { date: "2025-01-02", score: 5 },
  { date: "2025-01-03", score: 2 },
];   */
}

export default function MoodChart({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={3} />
    </LineChart>
  );
}
