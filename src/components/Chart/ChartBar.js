import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if (props.max > 0) {

        // this format will convert it into a string, to use for styling
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
          {/* the style attribute use a js object instead of string, you can use cammelCase for heiphenated properties or use quotes */}
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
