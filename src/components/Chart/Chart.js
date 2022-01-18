import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // this will return an array of 12 values to find the max
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // the spread operator to pull out all the array elements and use them as stand alone arugments
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* the maxValue prop is to plot the value in relation to the maximum value in the entire chart, it's a unique value not extracted from datapoints */}
      {/* The key prop is important it helps react render list itmes efficiently, we're using label as unique identifier */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
