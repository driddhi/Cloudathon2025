import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dummyData = [
  { date: "2024-03-01", cost: 120 },
  { date: "2024-03-02", cost: 150 },
  { date: "2024-03-03", cost: 130 },
  { date: "2024-03-04", cost: 180 },
  { date: "2024-03-05", cost: 170 },
  { date: "2024-03-06", cost: 190 },
];

const serviceBreakdown = [
  { name: "Compute", value: 400 },
  { name: "Storage", value: 250 },
  { name: "Networking", value: 150 },
  { name: "Databases", value: 200 },
];

const forecastData = [
  { month: "Apr", cost: 200 },
  { month: "May", cost: 220 },
  { month: "Jun", cost: 240 },
  { month: "Jul", cost: 260 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const costSavingSuggestions = [
  "Reduce idle VM instances",
  "Optimize storage usage",
  "Use committed use discounts",
  "Scale down underutilized services",
];

export default function CostDashboard() {
  const [data, setData] = useState(dummyData);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GCP Cost Optimization Dashboard</h1>
      
      {/* Cost Trend Chart */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Cost Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cost" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Cost Breakdown by Service */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Cost Breakdown by Service</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={serviceBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {serviceBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Forecast Monthly Costs */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Forecast Monthly Costs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cost" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* AI Generated Cost Saving Suggestions */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">AI Generated Cost Saving Suggestions</h2>
          <ul className="list-disc pl-5">
            {costSavingSuggestions.map((suggestion, index) => (
              <li key={index} className="mb-2">{suggestion}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Button onClick={() => alert("Fetching new data...")}>Refresh Data</Button>
    </div>
  );
}
