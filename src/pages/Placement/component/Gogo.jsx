import React from 'react';
import { Chart } from "react-google-charts";

const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

const options = {
  Chart:{
    title:"Hello"
  }  
}


const Gogo = () => {
  return (
    
    
      <Chart
        chartType="Bar"
        // width="100%"
        // height="400px"
        data={data}
        options={options}
      />
  )
}

export default Gogo