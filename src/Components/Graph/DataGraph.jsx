import { MedicalContext } from "../../MedicalContext";
import { useContext, useEffect, useState } from "react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "bp",
//     Bp:{}

//   },
//   {
//     name: "HeartRate",

//   },
//   {
//     name: "Oxygen",

//   },
//   {
//     name: "Weight",

//   },
//   {
//     name: "steps",

//   },

// ];

const DataGraph = () => {
  const { units } = useContext(MedicalContext);

  console.log("Units ===>", units);

  // const data = [
  //   { name: 'HeartRate', HeartRate: units.find(item => item.type === "HeartRate").number},
  //   { name: 'BloodPressure', BloodPressure: units.find(item => item.type === "Blood pressure").number},
  //   { name: 'Sugar', Sugar: units.find(item => item.type === "sugar").number},
  //   { name: 'Oxygen', Oxygen: units.find(item => item.type === "oxygen").number},
  //   { name: 'Weight', Weight: units.find(item => item.type === "Weight").number},

  // ];
  const [data, setData] = useState([]);

  // when component mounted
  useEffect(() => {
    if (units.length > 0) {
      // let ob = units.map(u=> ({name: u.type, number: u.number}))
      // change data state in component
      setData(units.map((u) => ({ name: u.type, [u.type]: u.number })));
      //       setTimeout(()=>{
      // console.log("data===>", data)
      //       }, 1000)

      // setData([
      //    {name: 'HeartRate', HeartRate: units.find(item => item.type === "HeartRate")?units.find(item => item.type === "HeartRate").number:0},
      //    { name: 'BloodPressure', BloodPressure: units.find(item => item.type === "Blood pressure") ? units.find(item => item.type === "Blood pressure").number:0},
      //    { name: 'Sugar', Sugar: units.find(item => item.type === "sugar")?units.find(item => item.type === "sugar").number:0},
      //    { name: 'Oxygen', Oxygen: units.find(item => item.type === "oxygen")? units.find(item => item.type === "oxygen").number:0},
      //    { name: 'Weight', Weight: units.find(item => item.type === "Weight")?units.find(item => item.type === "Weight").number:0},
      // ])
    }
  }, [units]); // each time untits changed

  return (
    <>
      {units.length && (
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={800}
            height={400}
            data={data}
            style={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Blood pressure" fill="#8884d8" />
            <Bar dataKey="HeartRate" fill="#FF0000" />
            <Bar dataKey="Oxygen" fill="#FFA500" />
            <Bar dataKey="Weight" fill="#FFC0CB" />
            <Bar dataKey="Sugar" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
export default DataGraph;
