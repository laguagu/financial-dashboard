"use client"
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type RevenueData = {
  month: string;
  revenue: number;
};

type MonthlyRevenueChartProps = {
    data: RevenueData[];
};

const MonthlyRevenueChart = ({ data }: MonthlyRevenueChartProps) => {
  return (
    <ResponsiveContainer width="100%" minHeight="400px">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyRevenueChart;
