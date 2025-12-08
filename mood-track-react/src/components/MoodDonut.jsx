import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
{
  /*  const data = [
  { name: "Happy", value: 5, color: "#FFD700" },
  { name: "Sad", value: 2, color: "#1E90FF" },
  { name: "Angry", value: 1, color: "#FF4500" },
  { name: "Relaxed", value: 4, color: "#32CD32" },
];
   */
}

export default function MoodDonut({ data }) {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={40} // <--- Donut
        outerRadius={110}
        paddingAngle={8}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}
