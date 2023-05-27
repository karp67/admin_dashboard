import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  const data = [
    {
      name: "Jan",
      "Active user": 4000,
    },
    {
      name: "Feb",
      "Active user": 3000,
    },
    {
      name: "Mar",
      "Active user": 10000,
    },
    {
      name: "Apr",
      "Active user": 2000,
    },
    {
      name: "May",
      "Active user": 1500,
    },
    {
      name: "Jun",
      "Active user": 5500,
    },
    {
      name: "Jul",
      "Active user": 2200,
    },
    {
      name: "Aug",
      "Active user": 1100,
    },
    {
      name: "Sep",
      "Active user": 7000,
    },
    {
      name: "Oct",
      "Active user": 5000,
    },
    {
      name: "Nov",
      "Active user": 8000,
    },
    {
      name: "Dec",
      "Active user": 4000,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active user" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
