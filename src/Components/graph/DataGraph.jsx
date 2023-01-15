

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "bp",
    
  },
  {
    name: "HeartRate",
    
  },
  {
    name: "Oxygen",
   
  },
  {
    name: "Weight",
    
  },
  {
    name: "steps",
   
  },
  
];

const Datagraph =() =>{
  return (
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Bp" fill="#8884d8" />
      <Bar dataKey="HeartRate" fill="#FF0000" />
      <Bar dataKey="oxygen" fill="#FFA500" />
      <Bar dataKey="weight" fill="#FFC0CB" />
      <Bar dataKey="steps" fill="#82ca9d" />
    </BarChart>
  );
}
export default Datagraph